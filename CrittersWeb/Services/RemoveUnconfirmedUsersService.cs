using CrittersWeb.DBModeles;
using CrittersWeb.DBModeles.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CrittersWeb.Services
{
    public class RemoveUnconfirmedUsersService: BackgroundService
    {        
        
        public RemoveUnconfirmedUsersService(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }

        private readonly IServiceScopeFactory _serviceScopeFactory;

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {            
            while (!stoppingToken.IsCancellationRequested)
            {                
                using (var scope = _serviceScopeFactory.CreateScope())
                {
                    await RemoveUnconfirmedUsers(scope);
                }
                await Task.Delay(TimeSpan.FromSeconds(600), stoppingToken);
            }
        }

        private async Task RemoveUnconfirmedUsers(IServiceScope scope)
        {
            var now = DateTimeOffset.Now;
            var dbContext = scope.ServiceProvider.GetRequiredService<CrittersContext>();            
            var expired = dbContext.Users.Where(u => u.EmailConfirmed == false).ToArray()
                        .Where(u =>  (now - u.RegistrationDate).TotalHours > 3).ToArray();                        
            var userMangager = scope.ServiceProvider.GetRequiredService<UserManager<GameUser>>();
            foreach (var user in expired)
            {                
                try
                {
                    //var tr = dbContext.Entry<GameUser>(user).State;
                    await userMangager.DeleteAsync(user);
                }
                catch(Exception e)
                {                    
                }
            }
            dbContext.SaveChanges();
        }
    }
}
