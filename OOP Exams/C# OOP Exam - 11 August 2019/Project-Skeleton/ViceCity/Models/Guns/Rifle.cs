using System;
using System.Collections.Generic;
using System.Text;

namespace ViceCity.Models.Guns
{
    public class Rifle : Gun
    {
        private const int bulletsPerBarrel = 50;
        private const int totalBullets = 500;

        public Rifle(string name)
            : base(name, bulletsPerBarrel, totalBullets)
        {
        }

        public override int Fire()
        {
            int countOfAllowedShots = 5;

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
