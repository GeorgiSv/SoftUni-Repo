using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace VaporStore.DataProcessor.Dto.Export
{
    [XmlType("Game")]
    public class ExportGameDTO
    {
        [XmlAttribute("title")]
        public string title { get; set; }
        [XmlElement("Genre")]
        public string Genre { get; set; }

        [XmlElement("Price")]
        public string Price { get; set; }
    }
}
