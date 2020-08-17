using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace VaporStore.DataProcessor.Dto.Import
{
    public class TagDTO
    {
        [Required]
        public string Name { get; set; }
    }
}
