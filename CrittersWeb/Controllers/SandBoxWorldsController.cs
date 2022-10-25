using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class SandBoxWorldsController : Controller
    {
        readonly ISandBoxWorldsRepository _rep;
        readonly UserManager<GameUser> _userManager;
        public SandBoxWorldsController(ISandBoxWorldsRepository rep, UserManager<GameUser> userManager)
        {
            _rep = rep;
            _userManager = userManager;
        }
       
        //[Authorize]
        public async Task<ActionResult<SandboxWorldTitleModel[]>> Titles()
        {
            var currentUser = await _userManager.GetUserAsync(User);

            var saves = await _rep.GetAll(currentUser);
            var sModels = saves.Select(s=> new SandboxWorldTitleModel() 
                    { Id = s.Id, Name = s.Name, Slot = s.Slot }).OrderBy(s=>s.Slot).
                    Where(s=>s.Slot>0&& s.Slot<=10).ToArray();                        
            return sModels;
        }

        [HttpPost]
        public async Task<ActionResult<int>> SaveToSlot([FromBody] SandBoxWorldSavingModel saving)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var id = await _rep.SaveToSlot(currentUser, saving.Slot, saving.NewName, (new CellsDataInModelSerializer()).ToCells(saving.CellsData));
            return id;
        }

        [HttpGet]
        public async Task<ActionResult<SandBoxWorldSavingModel>> LoadFromSlot(int slot)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var w = await _rep.LoadFromSlot(currentUser, slot);
            var data = (new CellsDataInModelSerializer()).CellsToData(w.cells);
            var result = new SandBoxWorldSavingModel() { Slot = slot, NewName = w.name, CellsData = data };
            return result;
        }


    }
}
