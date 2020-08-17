using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace VaporStore.DataProcessor.Dto.Import
{
    public class UserDTO
    {
        [Required]
        [MaxLength(20)]
        [MinLength(3)]
        public string Username { get; set; }

        [Required]
        [RegularExpression(@"^[A-Z][a-z]+ [A-Z][a-z]+$")]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Range(3,103)]
        public int Age { get; set; }

        public CardsDTO[] Cards { get; set; }
    }
}
