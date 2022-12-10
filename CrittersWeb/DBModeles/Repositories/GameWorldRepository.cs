using CrittersWeb.DBModeles.Entities;
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

        public GameWorld FindByName(string worldName)
        {
            return _dbContext.GameWorlds.FirstOrDefault(w=>w.Name == worldName);
        }
    }
}
