using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.ViewModels
{
    public class SandBoxWorldSavingModel
    {
        public int Slot { get; set; }
        public string NewName { get; set; }
        public int[] CellsData { get; set; }        
    }
}
