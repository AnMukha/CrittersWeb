using CrittersWeb.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data
{
    public class CrittersContext: IdentityDbContext<GameUser>
    {

        public CrittersContext()
        {
        }

        public DbSet<SandBoxSave> SandBoxSaves { get; set; }
        public DbSet<Article> Articles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var constring = "Data Source=critters.database.windows.net;Initial Catalog=Critters;User ID=AnMukha;Password=crittersDB1;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            optionsBuilder.UseSqlServer(constring);

        }

        /*protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<GameUser>()
                .HasData(new GameUser() { Email = "admin@admin.com", EmailConfirmed = true, UserName = "admin@admin.com",  
                        PasswordHash = "1" });
        }*/
    }
}
