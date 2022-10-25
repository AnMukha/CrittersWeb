using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    public class SandBoxSave
    {
        public int Id { get; set; }
        public int slot { get; set; } 
        public string name { get; set; }
        public string data { get; set; }

        public GameUser GameUser { get; set; }
    }
}
