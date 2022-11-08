using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class ArticleController : Controller
    {        
        public ActionResult<ArticleModel> Get([FromRoute] string name)
        {
            var reservedArticle = GetReservedArticle(name);
            if (reservedArticle != null)
                return reservedArticle;
            // find article in database
            // ....
            return new ArticleModel() { Name = "Not found", Content = "Article not found", CellsData = new int[0] };
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
