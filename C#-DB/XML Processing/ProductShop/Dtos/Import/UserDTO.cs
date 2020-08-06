using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace ProductShop.Dtos.Import
{
    [XmlType("User")]
    public class UserDTO
    {
        public string firstName { get; set; }

        public string lastName { get; set; }

        public int age { get; set; }
    }
}
