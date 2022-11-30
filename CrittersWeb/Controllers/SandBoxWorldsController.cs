using CrittersWeb.Data.Entities;
using CrittersWeb.Data.Repositories;
using CrittersWeb.DtoModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SandBoxWorldsController : ControllerBase
    {
        readonly ISandBoxWorldsRepository _rep;
        readonly UserManager<GameUser> _userManager;
        public SandBoxWorldsController(ISandBoxWorldsRepository rep, UserManager<GameUser> userManager)
        {
            _rep = rep;
            _userManager = userManager;
        }

        [Authorize]
        [HttpGet("[action]")]
        public async Task<ActionResult<SandboxWorldTitleDto[]>> Titles()
        {
            var currentUser = await _userManager.GetUserAsync(User);

            var saves = await _rep.GetAll(currentUser);
            var sModels = saves.Select(s=> new SandboxWorldTitleDto() 
                    { Id = s.Id, Name = s.Name, Slot = s.Slot }).OrderBy(s=>s.Slot).
                    Where(s=>s.Slot>0&& s.Slot<=10).ToArray();                        
            return sModels;
        }

        [Authorize]
        [HttpPost("[action]")]
        public async Task<ActionResult<int>> SaveToSlot([FromBody] SandBoxWorldSavingDto saving)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var id = await _rep.SaveToSlot(currentUser, saving.Slot, saving.NewName, CellsDataInModelSerializer.ToCells(saving.CellsData));
            return id;
        }

        [Authorize]
        [HttpGet("[action]")]
        public async Task<ActionResult<SandBoxWorldSavingDto>> LoadFromSlot(int slot)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var w = await _rep.LoadFromSlot(currentUser, slot);
            var data = CellsDataInModelSerializer.CellsToData(w.GetCells());
            var result = new SandBoxWorldSavingDto() { Slot = slot, NewName = w.Name, CellsData = data };
            return result;
        }


    }
}
