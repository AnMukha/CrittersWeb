using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{
    public class GameWorld
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Hero> Heroes { get; set; }
        public ICollection<SpaceArea> SpaceAreas { get; set; }

        public Hero FindHeroInWorld(string userId)
        {
            return Heroes?.FirstOrDefault(h => h.User.Id == userId);
        }
    }
}
