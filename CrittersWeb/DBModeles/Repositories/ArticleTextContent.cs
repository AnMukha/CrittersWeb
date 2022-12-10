using CrittersWeb.DBModeles.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Repositories
{
    public class ArticleTextContent
    {
        public ArticleTextContent()
        { }

        public ArticleTextContent(Article a)
        {
            Id = a.Id;
            Name = a.Name;
            Status = a.Status;
            ApprovalDate = a.ApprovalDate;
            Content = a.Content;
            CreationDate = a.CreationDate;
            LastEditionDate = a.LastEditionDate;
            AuthorName = a.Author.UserName;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTimeOffset CreationDate { get; set; }
        public DateTimeOffset LastEditionDate { get; set; }
        public DateTimeOffset ApprovalDate { get; set; }
        public ArticleStatus Status { get; set; }
        public string AuthorName { get; set; }

        internal void Update(Article article)
        {
            Name = article.Name;
            Content = article.Content;
            CreationDate = article.CreationDate;
            LastEditionDate = article.LastEditionDate;
            ApprovalDate = article.ApprovalDate;
            Status = article.Status;            
        }
    }
}
