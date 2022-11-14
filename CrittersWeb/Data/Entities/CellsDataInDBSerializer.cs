using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    [NotMapped]
    public static class CellsDataInDBSerializer
    {
        public static Cell[] DeserializeCells(string data)
        {
            if (string.IsNullOrWhiteSpace(data))
                return new Cell[0];
            var asNumbers = data.Split('|').Select(n => int.Parse(n)).ToArray();
            var reslut = new List<Cell>();
            for (var i = 0; i < asNumbers.Length; i = i + 2)
                reslut.Add(new Cell() { X = asNumbers[i], Y = asNumbers[i + 1] });
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
            }
            return b.ToString();
        }

    }
}
