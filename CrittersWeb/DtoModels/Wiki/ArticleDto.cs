using CrittersWeb.DBModeles.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public class ArticleDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public string AuthorName { get; set; }
        public string AuthorId { get; set; }
        public int[] CellsData { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public DateTimeOffset LastEditionDate { get; set; }
        public DateTimeOffset ApprovalDate { get; set; }
        public ArticleStatus Status { get; set; }        
    }
}
