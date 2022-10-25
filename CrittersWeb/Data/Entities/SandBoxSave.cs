using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    public class SandBoxSave
    {
        public int Id { get; set; }
        public int Slot { get; set; } 
        public string Name { get; set; }
        public string Data { get; set; }
        public GameUser GameUser { get; set; }
    }
}
