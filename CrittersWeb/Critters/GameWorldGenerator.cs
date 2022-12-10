using CrittersWeb.Critters.Modeles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Critters
{
    public class GameWorldGenerator
    {
        public GameWorldGenerator()
        {
        }
        public GameWorldModel GenerateMainWorld()
        {
            var newWorld = new GameWorldModel();
            var planet = new SpaceAreaModel();
            newWorld.SpaceAreas = new[] { planet };
            planet.AreaRects = new[] { new AreaRect() { Top = 0, Left = 0, Height = 1000, Width = 1000 } };
            return newWorld;
        }
    }
}
