using CrittersWeb.Data;
using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class ArticleController : Controller
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

        public ActionResult<ArticleModel> Get([FromRoute] string id)
        {
            Article article;
            if (!int.TryParse(id, out int articleId))
                article =  GetReservedArticle(id);            
            else
                article = _articlesRep.GetById(articleId);
            if (article == null)
                    return null;
            return new ArticleModel()
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
            };
        }

        [Authorize]
        public async Task<ActionResult<ArticleModel>> Post([FromBody] ArticleModel article)
        {
            var currentUser = await _userManager.GetUserAsync(User);            
            var newArticle = _articlesRep.Add(new Article() 
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
            return CreatedAtAction(nameof(Get), new { id = newArticle.Id });
        }

        [Authorize]
        public async Task<ActionResult<ArticleModel>> Put([FromBody] ArticleModel article)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var modified = _articlesRep.GetById(article.Id);
            if (modified == null)
                return null;
            if (!(User.IsInRole("Admin") || currentUser.Id == modified.Author.Id))
                return null;            
            if (article.Content?.Length > 10000)
                article.Content = article.Content.Substring(10000);
            if (article.Name?.Length > 60)
                article.Content = article.Content.Substring(60);
            modified.CellsData = CellsDataInDBSerializer.SerializeCells(CellsDataInModelSerializer.ToCells(article.CellsData));
            modified.Content = RestrictHtmlInContent(article.Content);
            modified.LastEditionDate = DateTime.Now;
            modified.Name = article.Name;
            modified.Status = article.Status == ArticleStatus.AwaitingApproval ? ArticleStatus.AwaitingApproval : ArticleStatus.Draft;
            _articlesRep.Save();
            _searchService.OnArticleChanged(modified);
            return CreatedAtAction(nameof(Get), new { id = article.Id });
        }

        [HttpPut]
        [Authorize]
        public async Task<ActionResult<bool>> ToArchive(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Archival);
        }

        private async Task<bool> ChangeStatus(int id, ArticleStatus status)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var modified = _articlesRep.GetById(id);
            if (modified == null)
                return false;
            if (!(User.IsInRole("Admin") || currentUser.Id == modified.Author.Id))
                return false;
            modified.Status = status;
            _articlesRep.Save();
            return true;
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<bool>> Approve(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Approved);
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<bool>> Reject(int id)
        {
            return await ChangeStatus(id, ArticleStatus.Regected);
        }

        private string RestrictHtmlInContent(string content)
        {
            // only i, br, b, a tags allowed in html;
            var result = new StringBuilder();
            var i=0;
            while (i < content.Length)
            {
                var l = FindEnabledTagLength( content, i);
                if (l != -1)
                {
                    result.Append(content.Substring(i, l));
                    i+= l;
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
            if (tag == "br"|| tag == "/br" || tag == "b" || tag == "/b" || tag == "i" || tag == "/i" || tag.StartsWith("a ") || tag=="/a")
                return lastTagPos - pos + 1;
            return -1;
        }    

        [HttpDelete]
        [Authorize]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = _articlesRep.Delete(id);
            _searchService.OnArticleDeleted(id);
            return result;
        }


        private Article GetReservedArticle(string articleName)
        {
            if (articleName == "Contents" || articleName == "About")
                return _articlesRep.GetByName(articleName);            
            return null;
        }
    }
}
