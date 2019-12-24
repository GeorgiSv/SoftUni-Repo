using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Players
{
    public class CivilPlayer : PLayer
    {
        private const int initialLifePoints = 100;

        public CivilPlayer(string name) 
            : base(name, initialLifePoints)
        {

        }
    }
}
