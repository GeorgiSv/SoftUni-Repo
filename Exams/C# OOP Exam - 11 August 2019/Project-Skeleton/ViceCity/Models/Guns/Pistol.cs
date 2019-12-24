using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Guns
{
    public class Pistol : Gun
    {
        private const int bulletsPerBarrel = 10;
        private const int totalBullets = 100;

        public Pistol(string name) 
            : base(name, bulletsPerBarrel, totalBullets)
        {
        }

        public override int Fire()
        {
            int countOfAllowedShots = 1;

            this.BulletsPerBarrel -= countOfAllowedShots;

            if (this.BulletsPerBarrel <= 0)
            {
                this.TotalBullets -= bulletsPerBarrel;
                this.BulletsPerBarrel = bulletsPerBarrel;
            }

            return countOfAllowedShots;
        }
    }
}
