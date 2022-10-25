using CrittersWeb.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Repositories
{
    public class SandBoxWorldsRepository : ISandBoxWorldsRepository
    {
        readonly CrittersContext _context;

        public SandBoxWorldsRepository(CrittersContext context)
        {
            _context = context;
        }

        public async Task<SandBoxSave[]> GetAll()
        {
            return await _context.SandBoxSaves.ToArrayAsync();
        }

        public async Task<int> SaveToSlot(int slot, string newName, Cell[] cells)
        {
            try
            {
                var existedSave = await _context.SandBoxSaves.FirstOrDefaultAsync(s => s.slot == slot);
                if (existedSave != null)
                {
                    existedSave.data = SerializeCells(cells);
                    existedSave.name = newName;
                    await _context.SaveChangesAsync();
                    return existedSave.Id;
                }
                else
                {
                    var newS = new SandBoxSave() { slot = slot, name = newName, data = SerializeCells(cells) };
                    await _context.AddAsync(newS);
                    await _context.SaveChangesAsync();
                    return newS.Id;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<SandBoxWorldInfo> LoadFromSlot(int slot)
        {
            var world = await _context.SandBoxSaves.FirstOrDefaultAsync(s => s.slot == slot);
            return new SandBoxWorldInfo() { slot = slot, name = world.name, cells = DeserializeCells(world.data) };
        }

        private Cell[] DeserializeCells(string data)
        {
            var asNumbers = data.Split('|').Select(n => int.Parse(n)).ToArray();
            var reslut = new List<Cell>();
            for (var i = 0; i < asNumbers.Length; i = i + 2)
                reslut.Add(new Cell() { x = asNumbers[i], y = asNumbers[i+1] });
            return reslut.ToArray();
        }

        private string SerializeCells(Cell[] cells)
        {
            var b = new StringBuilder();
            var first = true;
            foreach (var c in cells)
            {
                if (!first)                
                    b.Append("|");
                else
                    first = false;                
                b.Append(c.x.ToString());
                b.Append("|");
                b.Append(c.y.ToString());                
            }            
            return b.ToString();
        }
    }
}
