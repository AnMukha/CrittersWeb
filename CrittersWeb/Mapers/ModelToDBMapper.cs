using CrittersWeb.Critters.Modeles;
using CrittersWeb.DBModeles.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Mapers
{
    public class ModelToDBMapper
    {
        internal static void MapSpaceAreasToDb(GameWorldModel worldModel, GameWorld worldDb)
        {
            var areas = new List<SpaceArea>();
            foreach(var a in worldModel.SpaceAreas)
            {
                var aDb = new SpaceArea() {World = worldDb };
                aDb.SetCells(a.Cells);
                aDb.SetAreaRects(a.AreaRects);
                areas.Add(aDb);
            };
            worldDb.SpaceAreas = areas;            
        }
    }
}
