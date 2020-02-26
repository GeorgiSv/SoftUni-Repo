using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Decorations
{
    public class Plant : Decoration
    {
        private const int constComfort = 5;
        private const decimal constPrice = 10;
        public Plant()
            : base(constComfort, constPrice)
        {
        }
    }
}
