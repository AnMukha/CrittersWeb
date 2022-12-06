using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Data.Entities
{
    public class GameUser: IdentityUser
    {
        public Guid mailConfirmKey { get; set; }
        public DateTimeOffset registrationDate { get; set; }
        public ICollection<SandBoxSave> SandBoxSave { get; set; }        
    }
}
