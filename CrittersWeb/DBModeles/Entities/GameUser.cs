using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DBModeles.Entities
{
    public class GameUser: IdentityUser
    {
        public Guid MailConfirmKey { get; set; }
        public DateTimeOffset RegistrationDate { get; set; }
        public ICollection<SandBoxSave> SandBoxSave { get; set; }
        public ICollection<Hero> Heroes { get; set; }
    }
}
