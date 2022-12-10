using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels.Account
{
    public enum LoginResult
    {
        Success = 0,
        UserNotFound = 1,
        MailNotConfirmed = 2,
        AlreadySignedIn = 3,
        WrongPassword = 4
    }
}
