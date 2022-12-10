using CrittersWeb.Critters.Modeles;
using CrittersWeb.DBModeles.Entities;
using CrittersWeb.DBModeles.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public static class CellsDataInDtoSerializer
    {
        internal static Cell[] ToCells(int[] cellsData)
        {
            if (cellsData == null)
                return new Cell[0];
            var result = new List<Cell>();
            for (var i = 0; i < cellsData.Length; i += 3)
                result.Add(new Cell() { X = cellsData[i], Y = cellsData[i + 1], HeroId = cellsData[i + 2] == -1? (int?)null: cellsData[i + 2]});
            return result.ToArray();
        }

        internal static int[] CellsToData(Cell[] cells)
        {
            var result = new List<int>();
            foreach (var c in cells)
            {
                result.Add(c.X);
                result.Add(c.Y);
                result.Add(c.HeroId??-1);
            }
            return result.ToArray();
        }
    }
}
