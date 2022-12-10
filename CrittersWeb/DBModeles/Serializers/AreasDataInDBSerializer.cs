using CrittersWeb.Critters.Modeles;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{    
    public static class AreasDataInDBSerializer
    {
        public static AreaRect[] DeserializeAreas(string areasData)
        {
            if (string.IsNullOrWhiteSpace(areasData))
                return new AreaRect[0];
            var asNumbers = areasData.Split('|').Select(n => int.Parse(n)).ToArray();
            var reslut = new List<AreaRect>();
            for (var i = 0; i < asNumbers.Length; i += 4)
                reslut.Add(new AreaRect() { Left = asNumbers[i], Top = asNumbers[i + 1], 
                            Width = asNumbers[i + 2], Height = asNumbers[i + 3] });
            return reslut.ToArray();
        }

        public static string SerializeAreas(AreaRect[] areaRects)
        {
            var b = new StringBuilder();
            var first = true;
            foreach (var a in areaRects)
            {
                if (!first)
                    b.Append("|");
                else
                    first = false;
                b.Append(a.Left.ToString());
                b.Append("|");
                b.Append(a.Top.ToString());
                b.Append("|");
                b.Append(a.Width.ToString());
                b.Append("|");
                b.Append(a.Height.ToString());
            }
            return b.ToString();
        }

    }
}
