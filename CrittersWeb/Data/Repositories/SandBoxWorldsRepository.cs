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
                existedSave.Data = CellsDataInDBSerializer.SerializeCells(cells);
                existedSave.Name = newName;
                await _context.SaveChangesAsync();
                return existedSave.Id;
            }
            else
            {
                var newS = new SandBoxSave() {GameUser = user,  Slot = slot, Name = newName, Data = CellsDataInDBSerializer.SerializeCells(cells) };
                await _context.AddAsync(newS);
                await _context.SaveChangesAsync();
                return newS.Id;
            }
        }

        public async Task<SandBoxSave> LoadFromSlot(GameUser user, int slot)
        {
            return await _context.SandBoxSaves.Where(s => s.GameUser == user).FirstOrDefaultAsync(s => s.Slot == slot);            
        }

    }
}
