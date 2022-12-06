using CrittersWeb.Data;
using CrittersWeb.Data.Entities;
using CrittersWeb.DtoModels;
using CrittersWeb.Services;
using CrittersWeb.Services.Mail;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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
            var newUser = new GameUser();
            newUser.Email = m.Mail;
            newUser.UserName = m.UserName;
            newUser.EmailConfirmed = false;
            newUser.mailConfirmKey = Guid.NewGuid();
            newUser.registrationDate = DateTimeOffset.Now;
            var result = await _signInManager.UserManager.CreateAsync(newUser, m.Password);
            _emailService.SendMail(BuildEmailRequest(newUser));            
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
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.mailConfirmKey == key);                       
            if (user == null)
                return NotFound();
            if (!user.EmailConfirmed)
            {
                user.EmailConfirmed = true;
                await _dbContext.SaveChangesAsync();
            }
            var html = System.IO.File.ReadAllText(@"./Controllers/Assets/MailConfirmed.html");
            return base.Content(html, "text/html");
        }

        private MailRequest BuildEmailRequest(GameUser user)
        {
            var baseUrl = Request.GetTypedHeaders().Referer.ToString().Replace("client/","");
            var body = "To confirm you Critters account eMail click the link: "+Environment.NewLine+
                $"{baseUrl}account/confirmemail/{user.mailConfirmKey}";
            return new MailRequest() { ToEmail = user.Email, Body = body, Subject = "Your Critters mail comfirmation" };
        }

    }
}
