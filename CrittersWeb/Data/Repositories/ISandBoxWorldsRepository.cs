using CrittersWeb.Data.Entities;
using CrittersWeb.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Repositories
{
    public interface ISandBoxWorldsRepository
    {
        Task<SandBoxSave[]> GetAll();
        Task<int> SaveToSlot(int slot, string newName, Cell[] cells);
        Task<SandBoxWorldInfo> LoadFromSlot(int slot);
    }
}