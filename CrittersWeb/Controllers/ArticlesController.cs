using CrittersWeb.Data.Repositories;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace CrittersWeb.Controllers
{
    public class ArticlesController : Controller
    {
        ArticlesRepository _articlesRep;

        public ArticlesController(ArticlesRepository articlesRep)
        {
            _articlesRep = articlesRep;
        }

        [HttpGet]
        public ActionResult<ArticleTitleModel[]> All()
        {
            return _articlesRep.GetAll(0,999999).Select(a=> new ArticleTitleModel() 
            { 
                Author = a.Author?.UserName,
                EditionDate = a.LastEditionDate,
                Id = a.Id,
                Name = a.Name,
                ShortContent = a.Content
            }).ToArray();
        }
    }
}
