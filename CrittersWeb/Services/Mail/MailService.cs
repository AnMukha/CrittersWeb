﻿using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.Services.Mail
{
    public class MailService
    {
        
        public MailService(MailConfig mailConfig)
        {
            _mailConfig = mailConfig;
        }

        readonly MailConfig _mailConfig;

        public async Task SendMail(MailRequest mailRequest)
        {
            var email = new MimeMessage { Sender = MailboxAddress.Parse(_mailConfig.Mail) };
            email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));
            email.Subject = mailRequest.Subject;
            var builder = new BodyBuilder { HtmlBody = mailRequest.Body };
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailConfig.Host, _mailConfig.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailConfig.Mail, _mailConfig.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }

    }
}
