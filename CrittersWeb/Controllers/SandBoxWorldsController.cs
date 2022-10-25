using CrittersWeb.Data.Repositories;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class SandBoxWorldsController : Controller
    {
        readonly ISandBoxWorldsRepository _rep;
        public SandBoxWorldsController(ISandBoxWorldsRepository rep)
        {
            _rep = rep;
        }
       
        //[Authorize]
        public async Task<ActionResult<SandboxWorldTitleModel[]>> Titles()
        {
            var saves = await _rep.GetAll();
            var sModels = saves.Select(s=> new SandboxWorldTitleModel() 
                    { Id = s.Id, name = s.name, slot = s.slot }).OrderBy(s=>s.slot).
                    Where(s=>s.slot>0&& s.slot<=10).ToArray();                        
            return sModels;
        }

        [HttpPost]
        public async Task<ActionResult<int>> SaveToSlot([FromBody] SandBoxWorldSavingModel saving)
        {            
            var id = await _rep.SaveToSlot(saving.slot, saving.newName, (new CellsDataInModelSerializer()).ToCells(saving.cellsData));
            return id;
        }

        [HttpGet]
        public async Task<ActionResult<SandBoxWorldSavingModel>> LoadFromSlot(int slot)
        {            
            var w = await _rep.LoadFromSlot(slot);
            var data = (new CellsDataInModelSerializer()).CellsToData(w.cells);
            var result = new SandBoxWorldSavingModel() { slot = slot, newName = w.name, cellsData = data };
            return result;
        }


    }
}
