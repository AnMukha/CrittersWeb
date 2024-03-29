﻿using CrittersWeb.DBModeles.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles
{
    public class CrittersContext: IdentityDbContext<GameUser>
    {

        public CrittersContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        readonly IConfiguration _configuration;

        public DbSet<SandBoxSave> SandBoxSaves { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<GameWorld> GameWorlds { get; set; }
        public DbSet<Hero> Heroes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var constring = _configuration.GetConnectionString("CrittersSQL");
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
