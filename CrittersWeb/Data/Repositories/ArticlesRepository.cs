using CrittersWeb.Data.Entities;
using System;
using System.Linq;

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
            return _dbContext.Articles.Find(id);
        }

        public Article Add(Article article)
        {
            _dbContext.Add(article);
            _dbContext.SaveChanges();
            return article;
        }

        public Article[] GetAll(int pageNum, int pageSize)
        {
            return _dbContext.Articles.ToArray();
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

        internal void Save()
        {
            _dbContext.SaveChanges();
        }
    }
}
