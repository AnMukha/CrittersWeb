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

        public async Task<SandBoxSave[]> GetAll(GameUser user)
        {            
            return await _context.SandBoxSaves.Where(s => s.GameUser == user).ToArrayAsync();
        }

        public async Task<int> SaveToSlot(GameUser user, int slot, string newName, Cell[] cells)
        {
            var existedSave = await _context.SandBoxSaves.Where(s => s.GameUser == user).FirstOrDefaultAsync(s => s.Slot == slot);
            if (existedSave != null)
            {
                existedSave.Data = SerializeCells(cells);
                existedSave.Name = newName;
                await _context.SaveChangesAsync();
                return existedSave.Id;
            }
            else
            {
                var newS = new SandBoxSave() {GameUser = user,  Slot = slot, Name = newName, Data = SerializeCells(cells) };
                await _context.AddAsync(newS);
                await _context.SaveChangesAsync();
                return newS.Id;
            }
        }

        public async Task<SandBoxWorldInfo> LoadFromSlot(GameUser user, int slot)
        {
            var world = await _context.SandBoxSaves.Where(s => s.GameUser == user).FirstOrDefaultAsync(s => s.Slot == slot);
            return new SandBoxWorldInfo() { slot = slot, name = world.Name, cells = DeserializeCells(world.Data) };
        }

        private Cell[] DeserializeCells(string data)
        {
            var asNumbers = data.Split('|').Select(n => int.Parse(n)).ToArray();
            var reslut = new List<Cell>();
            for (var i = 0; i < asNumbers.Length; i = i + 2)
                reslut.Add(new Cell() { X = asNumbers[i], Y = asNumbers[i+1] });
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
                b.Append(c.X.ToString());
                b.Append("|");
                b.Append(c.Y.ToString());                
            }            
            return b.ToString();
        }
    }
}
