using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public class UserInfoDto
    {
        public string Name { get; set; }
        public bool SignedIn { get; set; }
        public bool Admin { get; set; }
    }
}
