using CrittersWeb.Critters.Modeles;
using CrittersWeb.DBModeles.Entities;
using CrittersWeb.DBModeles.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public static class AreaRectsDataInDtoSerializer
    {
        internal static AreaRect[] ToAreaRects(int[] areaRectData)
        {
            if (areaRectData == null)
                return new AreaRect[0];
            var result = new List<AreaRect>();
            for (var i = 0; i < areaRectData.Length; i += 4)
                result.Add(new AreaRect()
                {
                    Left = areaRectData[i],
                    Top = areaRectData[i + 1],
                    Width = areaRectData[i + 2],
                    Height = areaRectData[i + 3]
                });
            return result.ToArray();
        }

        internal static int[] AreaRectsToData(AreaRect[] rects)
        {
            var result = new List<int>();
            foreach (var r in rects)
            {
                result.Add(r.Left);
                result.Add(r.Top);
                result.Add(r.Width);
                result.Add(r.Height);
            }
            return result.ToArray();
        }
    }
}
