using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Decorations
{
    public class Ornament : Decoration
    {
        private const int constComfort = 1;
        private const decimal constPrice = 5;
        public Ornament()
            : base(constComfort, constPrice)
        {
        }
    }
}
