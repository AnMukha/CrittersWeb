using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.ViewModels
{
    public class SandBoxWorldSavingModel
    {
        public int slot { get; set; }
        public string newName { get; set; }
        public int[] cellsData { get; set; }
    }
}
