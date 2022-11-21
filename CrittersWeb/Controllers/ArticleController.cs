using CrittersWeb.Data;
using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using CrittersWeb.ViewModels;
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
            var reservedArticle = GetReservedArticle(id);
            if (reservedArticle != null)
                return reservedArticle;
            if (!int.TryParse(id, out int articleId))
                return null;
            var article = _articlesRep.GetById(articleId);
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

        public async Task<ActionResult<ArticleModel>> Post([FromBody] ArticleModel article)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var newArticle = _articlesRep.Add(new Article() 
            {  
                 ApprovalDate= article.ApprovalDate,
                 Author = currentUser,
                 CellsData =  CellsDataInDBSerializer.SerializeCells(CellsDataInModelSerializer.ToCells(article.CellsData)),
                 Content = RestrictHtmlInContent(article.Content),
                 CreationDate = article.CreationDate,
                 LastEditionDate = DateTime.Now,
                 Name = article.Name,
                 Status = ArticleStatus.Draft
            });
            _searchService.OnArticleChanged(newArticle);
            return CreatedAtAction(nameof(Get), new { id = newArticle.Id });
        }

        public async Task<ActionResult<ArticleModel>> Put([FromBody] ArticleModel article)
        {
            if (article.Content?.Length > 10000)
                article.Content = article.Content.Substring(10000);
            if (article.Name?.Length > 60)
                article.Content = article.Content.Substring(60);
            var modified = _articlesRep.GetById(article.Id);
            if (modified != null)
            {
                modified.CellsData = CellsDataInDBSerializer.SerializeCells(CellsDataInModelSerializer.ToCells(article.CellsData));
                modified.Content = RestrictHtmlInContent(article.Content);
                modified.LastEditionDate = DateTime.Now;
                modified.Name = article.Name;
                _articlesRep.Save();
                _searchService.OnArticleChanged(modified);
                return CreatedAtAction(nameof(Get), new { id = article.Id });
            }
            return null;
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
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = _articlesRep.Delete(id);
            _searchService.OnArticleDeleted(id);
            return result;
        }


        private ArticleModel GetReservedArticle(string articleName)
        {
            if (articleName == "Contents")
            {
                return new ArticleModel()
                {
                    Name = "Contents",
                    Content = "1. sdfsdfsdfsdf sdfsdfsdfsdf sd",
                    CellsData = new int[0]
                };
            }
            else if (articleName == "About")
            {
                return new ArticleModel()
                {
                    Name = "About",
                    Content = "This is a Wiki about Critters cell atomata....",
                    CellsData = new int[0]
                };
            }
            return null;
        }
    }
}
