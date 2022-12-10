using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Critters.Modeles
{
    public class GameWorldModel
    {
        public string Name { get; set; }        
        public SpaceAreaModel[] SpaceAreas { get; set; }
    }
}
