using CrittersWeb.Critters.Modeles;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{
    
    public static class CellsDataInDBSerializer
    {
        public static Cell[] DeserializeCells(string data)
        {
            if (string.IsNullOrWhiteSpace(data))
                return new Cell[0];
            var asNumbers = data.Split('|').Select(n => int.Parse(n)).ToArray();
            var reslut = new List<Cell>();
            for (var i = 0; i < asNumbers.Length; i += 3)
                reslut.Add(new Cell() { X = asNumbers[i], Y = asNumbers[i + 1], 
                            HeroId = asNumbers[i + 2] == -1? (int?)null: asNumbers[i + 2] });
            return reslut.ToArray();
        }

        public static string SerializeCells(Cell[] cells)
        {
            var b = new StringBuilder();
            var first = true;
            foreach (var c in cells)
            {
                if (!first)
                    b.Append("|");
                else
                    first = false;
                b.Append(c.X.ToString());
                b.Append("|");
                b.Append(c.Y.ToString());
                b.Append("|");
                b.Append(c.HeroId == null? "-1": c.HeroId.ToString());
            }
            return b.ToString();
        }

    }
}
