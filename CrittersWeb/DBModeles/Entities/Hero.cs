using CrittersWeb.Critters.Modeles;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{
    public class Hero
    {
        [Key]
        public int Id { get; set; }        
        public GameUser User { get; set; }
        public GameWorld World { get; set;}
        public int X { get; set; }
        public int Y { get; set; }
        public Direction Direction { get; set; }
        public int Energy { get; set; }
        public int CellsInBuffer { get; set; }
        public int CellsBufferSize { get; set; }
        public int MaxEnergy { get; set; }
        public int FieldSize { get; set; }
        public int CellsLimitToPut { get; set; }
    }

}
