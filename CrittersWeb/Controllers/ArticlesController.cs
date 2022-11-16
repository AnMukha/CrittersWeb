using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class ArticlesController : Controller
    {
        readonly ArticlesRepository _articlesRep;
        readonly UserManager<GameUser> _userManager;
        readonly SearchService _searchService;

        const int articleShortContentLength = 200;

        public ArticlesController(ArticlesRepository articlesRep, UserManager<GameUser> userManager, SearchService searchService)
        {
            _articlesRep = articlesRep;
            _userManager = userManager;
            _searchService = searchService;
        }

        [HttpGet]
        public ActionResult<ArticleTitleModel[]> All()
        {
            var articles = _articlesRep.GetAll(0, 999999).ToArray();
            return articles.Select(a => new ArticleTitleModel()
            {
                Author = a.Author?.UserName,
                EditionDate = a.LastEditionDate,
                Id = a.Id,
                Name = a.Name,
                ShortContent = CutArticleContent(a.Content)
            }).ToArray();
        }

        [HttpGet]
        public async Task<ActionResult<ArticleTitleModel[]>> My()
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var articles = _articlesRep.GetUserArticles(currentUser.Id).ToArray();
            return articles.Select(a => MapArticleToArticleTitleModel(a)).ToArray();
        }

        private ArticleTitleModel MapArticleToArticleTitleModel(Article a)
        {
            return new ArticleTitleModel()
            {
                Author = a.Author?.UserName,
                EditionDate = a.LastEditionDate,
                Id = a.Id,
                Name = a.Name,
                ShortContent = CutArticleContent(a.Content)
            };
        }

        [HttpGet]
        public async Task<ActionResult<ArticleTitleModel[]>> Search([FromRoute]string request)
        {
            var result = _searchService.Search(request, _articlesRep);
            return _articlesRep.GetArticles(result.ArticlesId).Select(a=> MapArticleToArticleTitleModel(a)).ToArray();
        }

        private string CutArticleContent(string content)
        {
            string result = content;
            if (!(string.IsNullOrWhiteSpace(content) || content.Length <= articleShortContentLength))                
                result =  content.Substring(0, articleShortContentLength)+"...";
            // TODO we have to remove tags also ...
            return result;
        }
    }
}
