using CrittersWeb.Data.Entities;
using CrittersWeb.DtoModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase 
    {
        readonly SignInManager<GameUser> _signInManager;
        readonly UserManager<GameUser> _userManager;

        public AccountController(SignInManager<GameUser> signInManager, UserManager<GameUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpGet("[action]")]        
        public ActionResult<UserInfoDto> UserInfo()
        {
            return Ok(new UserInfoDto()
            {
                SignedIn = User.Identity.IsAuthenticated,
                Name = User.Identity.Name,
                Admin = User.IsInRole("Admin")
            });
        }

        [HttpPost("[action]")]        
        public async Task<ActionResult<bool>> Login([FromBody] LoginDto m)
        {
            if (!User.Identity.IsAuthenticated)
            {
                if (string.IsNullOrWhiteSpace(m.UserName))
                {
                    var user = await _userManager.FindByEmailAsync(m.Mail);
                    if (user != null)
                    {
                        var result = await _signInManager.PasswordSignInAsync(user, m.Password, true, false);
                        return result.Succeeded;
                    }
                    return Ok(false);
                }
                else
                {
                    var result = await _signInManager.PasswordSignInAsync(m.UserName, m.Password, true, false);
                    return Ok(result.Succeeded);
                }
            }
            return Ok(false);
        }

        [HttpGet("[action]")]        
        public async Task<ActionResult<bool>> Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
                return Ok(true);
            }
            return Ok(false);
        }

        [HttpPost("[action]")]        
        public async Task<ActionResult<RegistrationResultDto>> Register([FromBody] LoginDto m)
        {
            var newUser = new GameUser();
            newUser.Email = m.Mail;
            newUser.UserName = m.UserName;            
            var result = await _signInManager.UserManager.CreateAsync(newUser, m.Password);
            return Ok(new RegistrationResultDto() { Success = result.Succeeded, ErrorDescription = result.Errors.FirstOrDefault()?.Description });
        }

    }
}
