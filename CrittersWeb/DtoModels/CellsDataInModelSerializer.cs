using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public static class CellsDataInModelSerializer
    {
        internal static Cell[] ToCells(int[] cellsData)
        {
            if (cellsData == null)
                return new Cell[0];
            var result = new List<Cell>();
            for (var i = 0; i < cellsData.Length; i = i + 2)
                result.Add(new Cell() { X = cellsData[i], Y = cellsData[i+1], });
            return result.ToArray();
        }

        internal static int[] CellsToData(Cell[] cells)
        {
            var result = new List<int>();
            foreach (var c in cells)
            {
                result.Add(c.X);
                result.Add(c.Y);
            }
            return result.ToArray();
        }
    }
}
