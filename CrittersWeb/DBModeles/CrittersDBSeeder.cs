using CrittersWeb.Critters;
using CrittersWeb.DBModeles.Entities;
using CrittersWeb.Mapers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles
{
    public class CrittersDBSeeder
    {

        readonly IServiceProvider _serviceProvider;

        public CrittersDBSeeder(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task SeedData()
        {
            var context = _serviceProvider.GetRequiredService<CrittersContext>();
            await SeedUserData(context);
            await SeedWikiData(context);
            await SeedMainWorldData(context);            
        }

        private async Task SeedMainWorldData(CrittersContext context)
        {
            var mainW = await context.GameWorlds.FirstOrDefaultAsync(w => w.Name == "Main");
            //if (mainW != null)
            //{                
                //context.GameWorlds.Remove(mainW);
                //await context.SaveChangesAsync();
            //}
            if (mainW == null)
            {
                var newWorldModel = new GameWorldGenerator().GenerateMainWorld();
                var newGameW = new GameWorld { Name = "Main" };
                ModelToDBMapper.MapSpaceAreasToDb(newWorldModel, newGameW);
                context.Add(newGameW);
                await context.SaveChangesAsync();
            }
        }

        private async Task SeedWikiData(CrittersContext context)
        {            
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
                await context.SaveChangesAsync();
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
                await context.SaveChangesAsync();
            }
        }

        private async Task SeedUserData(CrittersContext context)
        {
            if (context.Roles.FirstOrDefault(r => r.Name == "Admin") == null)
            {
                context.Add(new IdentityRole() { Name = "Admin", NormalizedName = "ADMIN" });
                await context.SaveChangesAsync();
            }
            var userManager = _serviceProvider.GetRequiredService<UserManager<GameUser>>();
            var admin = await userManager.FindByNameAsync("Admin");
            if (admin == null)
            {
                var newUser = new GameUser()
                {
                    Email = "Admin@admin.com",
                    UserName = "Admin",
                    EmailConfirmed = true,
                    RegistrationDate = DateTimeOffset.Now
                };
                var conf = _serviceProvider.GetService<IConfiguration>();
                var password = conf.GetSection("Seeding").GetValue<string>("GameAdminDefaultPassword");
                var result = await userManager.CreateAsync(newUser, password);
                await userManager.AddToRoleAsync(newUser, "Admin");
            }
            else if (!await userManager.IsInRoleAsync(admin, "Admin"))
            {
                admin.EmailConfirmed = true;
                await userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }
}
