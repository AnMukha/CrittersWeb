using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Critters.Modeles
{    
    public class Cell
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int? HeroId { get; set; }
    }

    public enum Direction
    {
        top = 0,
        right = 1,
        bottom = 2,
        left = 3
    }

}
