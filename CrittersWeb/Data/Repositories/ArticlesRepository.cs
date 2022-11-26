using CrittersWeb.Data.Entities;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Repositories
{
    public class ArticlesRepository
    {
        CrittersContext _dbContext;
        public ArticlesRepository(CrittersContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Article GetById(int id)
        {
            return _dbContext.Articles.Where(a=>a.Id==id).Include(a => a.Author).FirstOrDefault();
        }

        public Article Add(Article article)
        {
            _dbContext.Add(article);
            _dbContext.SaveChanges();
            return article;
        }

        internal ArticleTextContent[] GetAllArticlesContent()
        {
            return _dbContext.Articles//.Where(a=> a.Status == ArticleStatus.Approved)
                .Select(a=> new ArticleTextContent()
                {
                    Id = a.Id,
                    Name = a.Name,
                    Status = a.Status,
                    ApprovalDate = a.ApprovalDate,
                    Content = a.Content,
                    CreationDate = a.CreationDate,
                    LastEditionDate = a.LastEditionDate,
                    AuthorName = a.Author.UserName
                }).ToArray();
        }

        public Article[] GetArticles(int[] articlesId)
        {
            return _dbContext.Articles.Where(a => articlesId.Contains(a.Id)).ToArray();
        }

        public Article[] GetAll(int pageNum, int pageSize, ArticleStatus status)
        {
            return _dbContext.Articles.Where(a=>a.Status == status).Include(a => a.Author).ToArray();
        }

        public bool Delete(int id)
        {
            var article = _dbContext.Articles.Find(id);
            if (article != null)
            {
                _dbContext.Articles.Remove(article);
                _dbContext.SaveChanges();
                return true;
            }
            return false;
        }

        public Article[] GetUserArticles(string userId)
        {
            return _dbContext.Articles.Where(a => a.Author.Id == userId).Include(a => a.Author).ToArray();
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        internal Article GetByName(string name)
        {
            return _dbContext.Articles.Where(a => a.Name == name).Include(a => a.Author).FirstOrDefault();
        }
    }

}
