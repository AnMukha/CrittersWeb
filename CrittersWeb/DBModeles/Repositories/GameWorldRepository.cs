using CrittersWeb.DBModeles.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Repositories
{
    public class GameWorldRepository
    {

        CrittersContext _dbContext;

        public GameWorldRepository(CrittersContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<GameWorld> FindByName(string worldName)
        {
            return await _dbContext.GameWorlds.Where(w => w.Name == worldName).Include(w => w.Heroes).Include(w => w.SpaceAreas).FirstOrDefaultAsync();
        }

        public async Task SaveChanges()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
