using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels.Sandbox
{
    public class SandBoxWorldSavingDto
    {
        public int Slot { get; set; }
        public string NewName { get; set; }
        public int[] CellsData { get; set; }        
    }
}
