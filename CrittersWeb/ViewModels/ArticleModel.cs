using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.ViewModels
{
    public class ArticleModel
    {
        public string Name { get; set; }
        public string Content { get; set; }
        public int[] CellsData { get; set; }
    }
}
