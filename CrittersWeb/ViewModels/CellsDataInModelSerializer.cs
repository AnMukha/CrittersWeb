using CrittersWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.ViewModels
{
    public class CellsDataInModelSerializer
    {
        internal Cell[] ToCells(int[] cellsData)
        {
            var result = new List<Cell>();
            for (var i = 0; i < cellsData.Length; i = i + 2)
                result.Add(new Cell() { x = cellsData[i], y = cellsData[i+1], });
            return result.ToArray();
        }

        internal int[] CellsToData(Cell[] cells)
        {
            var result = new List<int>();
            foreach (var c in cells)
            {
                result.Add(c.x);
                result.Add(c.y);
            }
            return result.ToArray();
        }
    }
}
