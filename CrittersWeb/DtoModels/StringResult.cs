using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrittersWeb.DtoModels
{
    public class StringResult
    {
        public StringResult(string content)
        {
            Content = content;
        }
        public string Content { get; set; }
    }
}
