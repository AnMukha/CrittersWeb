using CrittersWeb.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data
{
    public class CrittersDBSeeder
    {

        IServiceProvider _serviceProvider;

        public CrittersDBSeeder(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task SeedData()
        {
            var context = _serviceProvider.GetRequiredService<CrittersContext>();            
            if (context.Articles.FirstOrDefault(a => a.Name == "Contents") == null)
                context.Articles.Add(new Article()
                {
                    ApprovalDate = DateTime.Now,
                    Status = ArticleStatus.Approved,
                    LastEditionDate = DateTime.Now,
                    CreationDate = DateTime.Now,
                    Name = "Contents",
                    Content = "Contents Contents Contents Contents Contents"
                });
            context.SaveChanges();
            if (context.Roles.FirstOrDefault(r => r.Name == "Admin") == null)
            {
                context.Add(new IdentityRole() { Name = "Admin", NormalizedName = "ADMIN" });
                context.SaveChanges();
            }
            if (context.Articles.FirstOrDefault(a => a.Name == "Contents") == null)
            {
                context.Add(new Article()
                {
                    Name = "Contents",
                    ApprovalDate = new DateTime(2022, 10, 1),
                    Author = null,
                    Status = ArticleStatus.Approved,
                    CellsData = null,
                    Content = "Contents",
                    CreationDate = new DateTime(2022, 10, 1),
                    LastEditionDate = new DateTime(2022, 10, 1)
                });
                context.SaveChanges();
            }
            if (context.Articles.FirstOrDefault(a => a.Name == "About") == null)
            {
                context.Add(new Article()
                {
                    Name = "About",
                    ApprovalDate = new DateTime(2022, 10, 1),
                    Author = null,
                    Status = ArticleStatus.Approved,
                    CellsData = null,
                    Content = "About",
                    CreationDate = new DateTime(2022, 10, 1),
                    LastEditionDate = new DateTime(2022, 10, 1)
                });
                context.SaveChanges();
            }
            var userManager = _serviceProvider.GetRequiredService<UserManager<GameUser>>();
            var admin = await userManager.FindByNameAsync("Admin");
            if (admin==null)
            {
                var newUser = new GameUser() { Email = "Admin@admin.com", UserName = "Admin" };
                var result = await userManager.CreateAsync(newUser, "CrittersAdmin1#");
                await userManager.AddToRoleAsync(newUser, "Admin");
            }
            else if (!await userManager.IsInRoleAsync(admin, "Admin"))
            {
                await userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }
}
