using CrittersWeb.DBModeles.Entities;
using CrittersWeb.DBModeles.Repositories;
using CrittersWeb.DtoModels;
using CrittersWeb.DtoModels.Game;
using CrittersWeb.DtoModels.Sandbox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Mapers
{
    public class DbToDtoMapper
    {
        public static GameWorldLocalAreaDto MapGameWorld(GameWorld world, Hero thisHero, Hero[] localHeroes, SpaceArea[] localAreas)
        {
            var result = new GameWorldLocalAreaDto()
            {
                Id = world.Id,
                Name = world.Name,
                ThisHero = MapHero(thisHero),                
                OthersInAreas = localHeroes.Where(h => h.Id != thisHero.Id).Select(h => MapHero(h)).ToArray(),
                LocalSpaceAreas = localAreas.Select(a => MapArea(a)).ToArray()
            };
            return result;
        }

        private static SpaceAreaDto MapArea(SpaceArea area)
        {
            return new SpaceAreaDto()
            {
                Id = area.Id,
                CellsData = CellsDataInDtoSerializer.CellsToData(area.GetCells()),
                AreaFormData = AreaRectsDataInDtoSerializer.AreaRectsToData(area.GetAreaRects())                
            };
        }

        private static HeroDto MapHero(Hero hero)
        {
            return new HeroDto()
            { 
                 CellsBufferSize = hero.CellsBufferSize,
                 CellsInBuffer = hero.CellsInBuffer, 
                 CellsLimitToPut = hero.CellsLimitToPut,
                 Direction = hero.Direction,
                 Energy = hero.Energy, 
                 FieldSize = hero.FieldSize,
                 GameUserId = hero.User.Id,
                 Id = hero.Id,
                 MaxEnergy = hero.MaxEnergy,
                 X = hero.X,
                 Y = hero.Y
            };
        }
    }
}
