using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    [NotMapped]
    public class Cell
    {
        public int X { get; set; }
        public int Y { get; set; }
    }
}
