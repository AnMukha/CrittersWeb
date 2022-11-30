using CrittersWeb.Data.Entities;
using CrittersWeb.DtoModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Repositories
{
    public interface ISandBoxWorldsRepository
    {
        Task<SandBoxSave[]> GetAll(GameUser user);
        Task<int> SaveToSlot(GameUser user, int slot, string newName, Cell[] cells);
        Task<SandBoxSave> LoadFromSlot(GameUser user, int slot);
    }
}