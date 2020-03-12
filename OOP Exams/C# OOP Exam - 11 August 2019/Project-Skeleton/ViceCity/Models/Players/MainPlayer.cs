using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Players
{
    public class MainPlayer : PLayer
    {
        private const int initialLifePoints = 100;
        public MainPlayer()
            : base("Tommy Vercetti", initialLifePoints)
        {

        }
    }
}
