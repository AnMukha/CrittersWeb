using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using CrittersWeb.DtoModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ArticlesController : ControllerBase
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

        [HttpGet("[action]")]
        public async Task<ActionResult<ArticleTitleDto[]>> All()
        {
            var articles = await _articlesRep.GetAll(0, 999999, ArticleStatus.Approved);
            return Ok(articles.Select(a => new ArticleTitleDto()
            {
                Author = a.Author?.UserName,
                EditionDate = a.LastEditionDate,
                Id = a.Id,
                Name = a.Name,
                ShortContent = CutArticleContent(a.Content),
                Status = a.Status
            }).ToArray());
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<ArticleTitleDto[]>> My()
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var articles = await _articlesRep.GetUserArticles(currentUser.Id);
            return Ok(articles.Select(a => MapArticleToArticleTitleModel(a)).ToArray());
        }
        
        [Authorize(Roles = "Admin")]
        [HttpGet("[action]")]
        public async Task<ActionResult<ArticleTitleDto[]>> Drafts()
        {
            return Ok((await _articlesRep.GetAll(0, 0, ArticleStatus.Draft)).Select(a => MapArticleToArticleTitleModel(a)).ToArray());
        }
        
        [Authorize(Roles = "Admin")]
        [HttpGet("[action]")]
        public async Task<ActionResult<ArticleTitleDto[]>> Archive()
        {
            return Ok((await _articlesRep.GetAll(0, 0, ArticleStatus.Archival)).Select(a => MapArticleToArticleTitleModel(a)).ToArray());
        }
        
        [Authorize(Roles = "Admin")]
        [HttpGet("[action]")]
        public async Task<ActionResult<ArticleTitleDto[]>> Moderation()
        {
            return Ok((await _articlesRep.GetAll(0, 0, ArticleStatus.AwaitingApproval)).Select(a => MapArticleToArticleTitleModel(a)).ToArray());
        }

        private ArticleTitleDto MapArticleToArticleTitleModel(Article a)
        {
            return new ArticleTitleDto()
            {
                Author = a.Author?.UserName,
                EditionDate = a.LastEditionDate,
                Id = a.Id,
                Name = a.Name,
                ShortContent = CutArticleContent(a.Content),
                Status = a.Status
            };
        }

        [HttpGet("[action]/{request}")]
        public async Task<ActionResult<ArticleTitleDto[]>> Search(string request)
        {
            var result = await _searchService.Search(request, new [] { ArticleStatus.Approved }, _articlesRep);
            return Ok((await _articlesRep.GetArticles(result.ArticlesId)).Select(a=> MapArticleToArticleTitleModel(a)).ToArray());
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
