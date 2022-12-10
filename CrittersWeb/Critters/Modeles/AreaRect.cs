using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Critters.Modeles
{
    public class AreaRect
    {
        public int Left { get; set; }
        public int Top { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public bool Contains(int x, int y) 
        {
            return x >= Left && x < Left + Width && y >= Top && y < Top + Height;
        }
    }
}
