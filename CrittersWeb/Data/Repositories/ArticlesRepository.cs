using CrittersWeb.Data.Entities;
using CrittersWeb.DtoModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task<Article> GetById(int id)
        {
            return await _dbContext.Articles.Where(a=>a.Id==id).Include(a => a.Author).FirstOrDefaultAsync();
        }

        public async Task<Article> Add(Article article)
        {
            _dbContext.Add(article);
            await _dbContext.SaveChangesAsync();
            return article;
        }

        public async Task<ArticleTextContent[]> GetAllArticlesContent()
        {
            return await _dbContext.Articles.Where(a=> a.Status == ArticleStatus.Approved)
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
                }).ToArrayAsync();
        }

        public async Task<Article[]> GetArticles(int[] articlesId)
        {
            return await _dbContext.Articles.Where(a => articlesId.Contains(a.Id)).ToArrayAsync();
        }

        public async Task<IEnumerable<Article>> GetAll(int pageNum, int pageSize, ArticleStatus status)
        {
            return await _dbContext.Articles.Where(a=>a.Status == status).Include(a => a.Author).ToArrayAsync();
        }

        public async Task<bool> Delete(int id)
        {
            var article = await _dbContext.Articles.FindAsync(id);
            if (article != null)
            {
                _dbContext.Articles.Remove(article);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Article[]> GetUserArticles(string userId)
        {
            return await _dbContext.Articles.Where(a => a.Author.Id == userId).Include(a => a.Author).ToArrayAsync();
        }

        public async Task Save()
        {
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Article> GetByName(string name)
        {
            return await _dbContext.Articles.Where(a => a.Name == name).Include(a => a.Author).FirstOrDefaultAsync();
        }
    }

}
