using AquaShop.Models.Fish.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace AquaShop.Models.Aquariums
{
    public class SaltwaterAquarium : Aquarium
    {
        private const int initialCapacity = 25;
        public SaltwaterAquarium(string name)
            : base(name, initialCapacity)
        {

        }

        public override void AddFish(IFish fish)
        {
            if (this.Capacity > this.Fish.Count)
            {
                this.Fish.Add(fish);
            }
            else
            {
                throw new InvalidOperationException("Not enough capacity.");
            }
        }
    }
}
