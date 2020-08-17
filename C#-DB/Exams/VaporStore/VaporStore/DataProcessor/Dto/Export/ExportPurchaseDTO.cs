using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace VaporStore.DataProcessor.Dto.Export
{
    [XmlType("Purchase")]
    public class ExportPurchaseDTO
    {
        [XmlElement("Card")]
        public string CardNumber { get; set; }

        [XmlElement("Cvc")]
        public string Ccs { get; set; }

        [XmlElement("Date")]
        public string Date { get; set; }

        [XmlElement("Game")]
        public ExportGameDTO Game { get; set; }
    }
}
