using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels.Game
{
    public class SpaceAreaDto
    {
        public int Id { get; set; }        
        public int[] AreaFormData { get; set; }
        public int[] CellsData { get; set; }
    }
}
