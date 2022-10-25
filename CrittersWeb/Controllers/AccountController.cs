using CrittersWeb.Data.Entities;
using CrittersWeb.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    public class AccountController : Controller
    {
        readonly SignInManager<GameUser> _signInManager;

        public AccountController(SignInManager<GameUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpGet]
        public ActionResult<UserInfoModel> UserInfo()
        {
            return new UserInfoModel() 
            { 
                SignedIn = User.Identity.IsAuthenticated,
                Email = User.Identity.Name
            };
        }

        [HttpPost]
        public async Task<ActionResult<bool>> Login([FromBody] LoginModel m)
        {
            if (!User.Identity.IsAuthenticated)
            {
                var result = await _signInManager.PasswordSignInAsync(m.Mail, m.Password, true, false);
                return result.Succeeded;
            }
            return false;
        }

        [HttpGet]
        public async Task<ActionResult<bool>> Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
                return true;
            }
            return false;
        }

        [HttpPost]
        public async Task<ActionResult<RegistrationResultModel>> Register([FromBody] LoginModel m)
        {
            var newUser = new GameUser();
            newUser.Email = m.Mail;
            newUser.UserName = m.Mail;
            var result = await _signInManager.UserManager.CreateAsync(newUser, m.Password);
            return new RegistrationResultModel() { Success = result.Succeeded, ErrorDescription = result.Errors.FirstOrDefault()?.Description };            
        }

    }
}
