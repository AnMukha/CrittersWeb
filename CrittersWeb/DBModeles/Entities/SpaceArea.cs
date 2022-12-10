using CrittersWeb.Critters.Modeles;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{
    public class SpaceArea
    {
        [Key]
        public int Id { get; set; }
        public GameWorld World { get; set; }
        public string AreaFormData { get; set; }
        public string CellsData { get; set; }
        public int Left { get; set; }
        public int Top { get; set; }

        public Cell[] GetCells()
        {
            return CellsDataInDBSerializer.DeserializeCells(CellsData);
        }
        public AreaRect[] GetAreaRects()
        {
            return AreasDataInDBSerializer.DeserializeAreas(AreaFormData);
        }
        public void SetCells(Cell[] cells)
        {
            CellsData = CellsDataInDBSerializer.SerializeCells(cells);
        }
        public void SetAreaRects(AreaRect[] areaRects)
        {
            AreaFormData = AreasDataInDBSerializer.SerializeAreas(areaRects);
            Left = areaRects.Min(a => a.Left);
            Top = areaRects.Min(a => a.Top);
        }


    }
}
