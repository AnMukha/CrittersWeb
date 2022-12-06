using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using CrittersWeb.DtoModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {

        ArticlesRepository _articlesRep;
        UserManager<GameUser> _userManager;
        SearchService _searchService;
        public ArticleController(ArticlesRepository articlesRep, UserManager<GameUser> userManager, SearchService searchService)
        {
            _articlesRep = articlesRep;
            _userManager = userManager;
            _searchService = searchService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ArticleDto>> Get(string id)
        {
            Article article;
            if (!int.TryParse(id, out int articleId))
                article = await GetReservedArticle(id);            
            else
                article = await _articlesRep.GetById(articleId);
            if (article == null)
                    return NotFound();
            return Ok(new ArticleDto()
            {
                 ApprovalDate = article.ApprovalDate,
                 AuthorId = article.Author?.Id,
                 AuthorName = article.Author?.UserName,
                 CellsData = CellsDataInModelSerializer.CellsToData(article.GetCells()),
                 Content = article.Content,
                 CreationDate = article.CreationDate,
                 Id = article.Id,
                 LastEditionDate = article.LastEditionDate,
                 Name = article.Name,
                 Status = article.Status
            });
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ArticleDto article)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var newArticle = await _articlesRep.Add(new Article()
            {
                ApprovalDate = article.ApprovalDate,
                Author = currentUser,
                CellsData = CellsDataInDBSerializer.SerializeCells(CellsDataInModelSerializer.ToCells(article.CellsData)),
                Content = RestrictHtmlInContent(article.Content),
                CreationDate = article.CreationDate,
                LastEditionDate = DateTime.Now,
                Name = article.Name,
                Status = article.Status == ArticleStatus.AwaitingApproval ? ArticleStatus.AwaitingApproval : ArticleStatus.Draft
            });
            _searchService.OnArticleChanged(newArticle);            
            return CreatedAtAction(nameof(Get), new { id = newArticle.Id }, new ArticleDto() { Id = newArticle.Id });            
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] ArticleDto article)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var modified = await _articlesRep.GetById(article.Id);
            if (modified == null)
                return NotFound();
            if (!(User.IsInRole("Admin") || currentUser.Id == modified.Author.Id))
                return BadRequest();        
            if (article.Content?.Length > 10000)
                article.Content = article.Content.Substring(10000);
            if (article.Name?.Length > 60)
                article.Content = article.Content.Substring(60);
            modified.CellsData = CellsDataInDBSerializer.SerializeCells(CellsDataInModelSerializer.ToCells(article.CellsData));
            modified.Content = RestrictHtmlInContent(article.Content);
            modified.LastEditionDate = DateTime.Now;
            modified.Name = article.Name;
            modified.Status = article.Status == ArticleStatus.AwaitingApproval ? ArticleStatus.AwaitingApproval : ArticleStatus.Draft;
            await _articlesRep.Save();
            _searchService.OnArticleChanged(modified);            
            return Ok();
        }

        [Authorize]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> ToArchive(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Archival);
        }

        private async Task<IActionResult> ChangeStatus(int id, ArticleStatus status)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var modified = await _articlesRep.GetById(id);
            if (modified == null)
                return NotFound();
            if (!(User.IsInRole("Admin") || currentUser.Id == modified.Author.Id))
                return NotFound();
            modified.Status = status;
            await _articlesRep.Save();
            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Approve(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Approved);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> Reject(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Regected);
        }        
        
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _articlesRep.Delete(id))
            {
                _searchService.OnArticleDeleted(id);
                return Ok();
            }
            else
                return NotFound();
        }

        private async Task<Article> GetReservedArticle(string articleName)
        {
            if (articleName.ToLower() == "contents" || articleName.ToLower() == "about")
                return await _articlesRep.GetByName(articleName);
            return null;
        }

        private string RestrictHtmlInContent(string content)
        {
            // only i, br, b, a tags allowed in html;
            var result = new StringBuilder();
            var i = 0;
            while (i < content.Length)
            {
                var l = FindEnabledTagLength(content, i);
                if (l != -1)
                {
                    result.Append(content.Substring(i, l));
                    i += l;
                }
                else
                {
                    if (content[i] == '<')
                        result.Append("&lt");
                    else if (content[i] == '>')
                        result.Append("&gt");
                    else
                        result.Append(content[i]);
                    i++;
                }
            }
            return result.ToString();
        }

        private int FindEnabledTagLength(string content, int pos)
        {
            if (content[pos] != '<')
                return -1;
            var lastTagPos = content.IndexOf('>', pos);
            if (lastTagPos == -1)
                return -1;
            var tag = content.Substring(pos + 1, lastTagPos - pos - 1);
            if (tag == "br" || tag == "/br" || tag == "b" || tag == "/b" || tag == "i" || tag == "/i" || tag.StartsWith("a ") || tag == "/a")
                return lastTagPos - pos + 1;
            return -1;
        }

    }
}
