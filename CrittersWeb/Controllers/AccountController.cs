﻿using CrittersWeb.Controllers.Assets;
using CrittersWeb.DBModeles;
using CrittersWeb.DBModeles.Entities;
using CrittersWeb.DtoModels;
using CrittersWeb.DtoModels.Account;
using CrittersWeb.DtoModels.Common;
using CrittersWeb.Services;
using CrittersWeb.Services.Mail;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Resources;
using System.Threading.Tasks;

namespace CrittersWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase 
    {
        readonly SignInManager<GameUser> _signInManager;
        readonly UserManager<GameUser> _userManager;
        readonly MailService _emailService;
        readonly CrittersContext _dbContext;

        public AccountController(SignInManager<GameUser> signInManager, UserManager<GameUser> userManager,
            MailService emailService, CrittersContext dbContext)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _emailService = emailService;
            _dbContext = dbContext;
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
        public async Task<ActionResult<LoginResult>> Login([FromBody] LoginDto m)
        {
            if (User.Identity.IsAuthenticated)
                return Ok(LoginResult.AlreadySignedIn);
            GameUser user = null;
            if (!string.IsNullOrWhiteSpace(m.UserName))
                user = await _userManager.FindByNameAsync(m.UserName);
            else if (!string.IsNullOrWhiteSpace(m.Mail))
                user = await _userManager.FindByEmailAsync(m.Mail);
            if (user == null)
                return Ok(LoginResult.UserNotFound);
            if (!user.EmailConfirmed)
                return Ok(LoginResult.MailNotConfirmed);
            var result = await _signInManager.PasswordSignInAsync(user, m.Password, true, false);
            return Ok(result.Succeeded ? LoginResult.Success : LoginResult.WrongPassword);
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
            var newUser = new GameUser()
            {
                Email = m.Mail,
                UserName = m.UserName,
                EmailConfirmed = false,
                MailConfirmKey = Guid.NewGuid(),
                RegistrationDate = DateTimeOffset.Now
            };
            var result = await _signInManager.UserManager.CreateAsync(newUser, m.Password);
            await _emailService.SendMail(BuildConfirmEmailRequest(newUser));
            return Ok(new RegistrationResultDto() { Success = result.Succeeded, ErrorDescription = result.Errors.FirstOrDefault()?.Description });
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("[action]/{userName}")]
        public async Task<IActionResult> DeleteUser(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            await _dbContext.Entry(user).Collection(u => u.SandBoxSave).LoadAsync();
            if (user == null)
                return NotFound();
            if (user.SandBoxSave!=null)
                foreach (var w in user.SandBoxSave)
                    _dbContext.Remove(w);
            _dbContext.SaveChanges();
            await _userManager.DeleteAsync(user);            
            return Ok();
        }

        [HttpGet("[action]/{key}")]
        public async Task<IActionResult> ConfirmEmail(Guid key)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.MailConfirmKey == key);
            if (user == null)
                return NotFound();
            if (!user.EmailConfirmed)
            {
                user.EmailConfirmed = true;
                await _dbContext.SaveChangesAsync();
            }
            var html = StaticHtml.MailConfirmed_html;
            // var html =  System.IO.File.ReadAllText(@"./Controllers/Assets/MailConfirmed.html");
            return base.Content(html, "text/html");
        }

        [HttpGet("[action]/{mailOrUser}")]
        public async Task<ActionResult<bool>> RestorePassword(string mailOrUser)
        {
            GameUser user = null;
            if (IsValidEmailAddress(mailOrUser))            
                user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == mailOrUser);
            if (user==null)
                user = await _dbContext.Users.FirstOrDefaultAsync(u => u.UserName == mailOrUser);
            if (user == null)
            {
                return Ok(false);
            }
            var key = Guid.NewGuid();
            user.MailConfirmKey = key;
            await _dbContext.SaveChangesAsync();
            await _emailService.SendMail(BuildPasswordRestoreEmailRequest(user.Email, key));
            return Ok(true);
        }

        [HttpGet("[action]/{key}")]
        public async Task<IActionResult> ChangePassword(Guid key)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.MailConfirmKey == key);
            if (user == null)
                return NotFound();
            var html = StaticHtml.ChangePassword_html;
            //html =  System.IO.File.ReadAllText(@"./Controllers/Assets/ChangePassword.html");            
            html = html.Replace("{key}", key.ToString());            
            return base.Content(html, "text/html");
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<StringResult>> SetPassword([FromBody] PasswordChange passwordChangeData)
        {
            var key = Guid.Parse(passwordChangeData.Key);
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.MailConfirmKey == key);
            if (user == null)
                return NotFound();
            var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = await _userManager.ResetPasswordAsync(user, resetToken, passwordChangeData.Password);                        
            return result.Succeeded? new StringResult("Password was been successfully changed"): new StringResult(result.Errors.FirstOrDefault()?.Description);
        }

        private MailRequest BuildConfirmEmailRequest(GameUser user)
        {
            var baseUrl = Request.GetTypedHeaders().Referer.ToString().Replace("client/", "");
            var body = "To confirm you Critters account eMail click the link: " + Environment.NewLine +
                $"{baseUrl}account/confirmemail/{user.MailConfirmKey}";
            return new MailRequest() { ToEmail = user.Email, Body = body, Subject = "Your Critters mail comfirmation" };
        }

        private MailRequest BuildPasswordRestoreEmailRequest(string mail, Guid key)
        {
            var baseUrl = Request.GetTypedHeaders().Referer.ToString().Replace("client/", "");
            var body = "To change password click the link: " + Environment.NewLine +
                $"{baseUrl}account/changepassword/{key}";
            return new MailRequest() { ToEmail = mail, Body = body, Subject = "Password changing in Critters account" };
        }

        public static bool IsValidEmailAddress(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
                return false;
            var arr = email.Split('@', StringSplitOptions.RemoveEmptyEntries);
            return arr.Length == 2 && arr[1].Contains(".");
        }

    }
}
