﻿using CrittersWeb.Critters.WorldsManagement;
using CrittersWeb.DBModeles.Entities;
using CrittersWeb.DBModeles.Repositories;
using CrittersWeb.DtoModels.Game;
using CrittersWeb.Mapers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameWorldController : ControllerBase
    {

        GameWorldRepository _worldRep;
        private readonly UserManager<GameUser> _userManager;

        public GameWorldController(GameWorldRepository worldRep, UserManager<GameUser> userManager)
        {
            _worldRep = worldRep;
            _userManager = userManager;
        }

        [Authorize]
        [HttpGet("[action]/{int id}")]
        public Task<IActionResult> GetWorld(int id)
        {
            throw new Exception();
        }

        [Authorize]
        [HttpGet("[action]")]
        public async Task<ActionResult<GameWorldLocalAreaDto>> GetMainWorld()
        {
            var world = _worldRep.FindByName("Main");
            var currentUser = await _userManager.GetUserAsync(User);
            var currentHero = world.FindHeroInWorld(world.Id);
            if (currentHero == null)
                return NotFound();
            var localAreas = HeroSpawnManager.FindLocalAreas(currentHero);
            var localHeroes = HeroSpawnManager.FindHeroesInAreas(world, localAreas);
            var result = DbToDtoMapper.MapGameWorld(world, currentHero, localHeroes, localAreas);
            return result;
        }


    }
}
