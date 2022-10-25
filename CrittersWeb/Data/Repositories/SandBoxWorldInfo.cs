using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Repositories
{
    public class SandBoxWorldInfo
    {
        public int slot { get; set; }
        public string name { get; set; }
        public Cell[] cells { get; set; }
    }
}
