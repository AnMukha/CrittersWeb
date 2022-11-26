using CrittersWeb.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.ViewModels
{
    public class ArticleTitleModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortContent { get; set; }
        public string Author { get; set; }        
        public DateTimeOffset EditionDate { get; set; }
        public ArticleStatus Status { get; set; }
    }
}
