using CrittersWeb.Data;
using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<GameUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            }).AddRoles<IdentityRole>()
            .AddEntityFrameworkStores<CrittersContext>();            
            services.AddDbContext<CrittersContext>();
            services.AddScoped<ISandBoxWorldsRepository, SandBoxWorldsRepository>();
            services.AddScoped<ArticlesRepository, ArticlesRepository>();
            services.AddSingleton<SearchService, SearchService>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {           
            
            var options = new DefaultFilesOptions();                        
            options.DefaultFileNames.Add("client/index.html");
            app.UseDefaultFiles(options);

            app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "article",
                    pattern: "article/{*id}",
                    defaults: new { controller = "Article", action = "Get" });
                endpoints.MapControllerRoute(
                    name: "article",
                    pattern: "article/new",
                    defaults: new { controller = "Article", action = "Post" });
                endpoints.MapControllerRoute(
                    name: "article",
                    pattern: "article/update",
                    defaults: new { controller = "Article", action = "Put" });
                endpoints.MapControllerRoute(
                    name: "articles",
                    pattern: "articles/search/{request?}",
                    defaults: new { controller = "Articles", action = "Search" });
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
