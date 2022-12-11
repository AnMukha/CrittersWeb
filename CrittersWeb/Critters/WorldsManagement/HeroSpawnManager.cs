using CrittersWeb.DBModeles.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Critters.WorldsManagement
{
    public class HeroSpawnManager
    {
        public static SpaceArea[] FindLocalAreas(Hero hero)
        {
            // find nearest area form areas list in the world
            var areas = hero.World.SpaceAreas.OrderBy(a=>Dist(hero.X, hero.Y, a.Left, a.Top)).ToArray();
            SpaceArea heroArea = null;
            foreach (var a in areas)
            {
                var rects = a.GetAreaRects();
                if (rects.Any(r => r.Contains(hero.X, hero.Y)))
                {
                    heroArea = a;
                    break;
                }
            }
            if (heroArea == null)
                return new SpaceArea[0];
            return FindLocalAreas(heroArea);
        }

        public static SpaceArea[] FindLocalAreas(SpaceArea area)
        {
            return new[] { area };
        }

        private static double Dist(int x1, int y1, int x2, int y2)
        {
            return Math.Sqrt((x2 - x1) * (x2 - x1) + (y2 - y1)* (y2 - y1));
        }

        public static Hero[] FindHeroesInAreas(GameWorld world, SpaceArea[] areas)
        {
            var rects = areas.SelectMany(a=> a.GetAreaRects()).ToArray();
            return world.Heroes.Where(h => rects.Any(r => r.Contains(h.X, h.Y))).ToArray();
        }

        public static (Hero, bool created) FindOrCreateHero(GameUser user, GameWorld world)
        {
            var hero = world.FindHeroInWorld(user.Id);
            if (hero == null)
                return (CreateHeroInWorld(world, user), true);
            else return (hero, false);
            
        }

        private static Hero CreateHeroInWorld(GameWorld world, GameUser user)
        {
            var hero = new Hero();
            SetDefaultValuesToHero(hero);
            hero.User = user;
            hero.World = world;
            world.Heroes.Add(hero);
            hero.X = world.SpaceAreas.First().Left + 10;
            hero.Y = world.SpaceAreas.First().Top + 10;
            return hero;
        }

        private static void SetDefaultValuesToHero(Hero hero)
        {
            hero.CellsBufferSize = 10;
            hero.CellsInBuffer = 10;
            hero.CellsLimitToPut = 10;
            hero.Direction = 0;
            hero.Energy = 10;
            hero.FieldSize = 10;
            hero.MaxEnergy = 20;            
        }
    }
    
}
