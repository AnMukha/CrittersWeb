using CrittersWeb.DtoModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels.Game
{
    public class GameWorldLocalAreaDto
    {        
        public int Id { get; set; }
        public string Name { get; set; }
        public HeroDto[] OthersInAreas { get; set; }
        public HeroDto ThisHero { get; set; }
        public SpaceAreaDto[] LocalSpaceAreas { get; set; }

    }
}
