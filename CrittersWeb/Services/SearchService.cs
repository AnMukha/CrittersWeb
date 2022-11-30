using CrittersWeb.Data;
using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CrittersWeb.Services
{
    public class SearchService
    {        

        List<ArticleTextContent> _articles = null;

        public async Task<SearchResult> Search(string request, ArticleStatus[] statuses,  ArticlesRepository articlesRep)
        {
            await RefreshArticlesCache(articlesRep);
            return SearchInCache(request, statuses);
        }

        public void OnArticleChanged(Article newArticle)
        {
            if (_articles != null)
            {
                var articleInCache = _articles.FirstOrDefault(a => a.Id == newArticle.Id);
                if (articleInCache == null)
                    _articles.Add(new ArticleTextContent(newArticle));
                else
                    articleInCache.Update(newArticle);
            }
        }

        public void OnArticleDeleted(int articleId)
        {
            if (_articles != null)
            {
                var articleInCache = _articles.FirstOrDefault(a => a.Id == articleId);
                if (articleInCache != null)
                    _articles.Remove(articleInCache);
            }
        }

        private SearchResult SearchInCache(string request, ArticleStatus[] statuses)
        {
            if (string.IsNullOrWhiteSpace(request))
                return new SearchResult() { ArticlesId= new int[0] }; 
            var keyWords = request.Split(' ');
            var req = keyWords.Where(w => !string.IsNullOrWhiteSpace(w)).ToArray();
            var resultArticlesId = new List<int>();
            foreach(var a in _articles.Where(a=> statuses.Contains(a.Status)))
            {
                bool matches = true;
                foreach (var w in req)
                {
                    var myRegex = new Regex($@"\b{w}\b");                    
                    var matchesInContent = myRegex.Matches(a.Content??"");
                    var matchesInTitle = myRegex.Matches(a.Name??"");
                    if (matchesInContent.Count==0 && matchesInTitle.Count==0)
                    {
                        matches = false;
                        break;
                    }
                }
                if (matches)
                    resultArticlesId.Add(a.Id);
            }
            return new SearchResult() { ArticlesId = resultArticlesId.ToArray() };
        }

        private async Task RefreshArticlesCache(ArticlesRepository articlesRep)
        {
            if (_articles == null)
                _articles = (await articlesRep.GetAllArticlesContent()).ToList();
        }
    }
}
