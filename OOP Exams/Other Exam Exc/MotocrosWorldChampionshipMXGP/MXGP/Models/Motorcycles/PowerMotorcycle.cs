using System;
using System.Collections.Generic;
using System.Text;

namespace MXGP.Models.Motorcycles
{
    public class PowerMotorcycle : Motorcycle
    {
        private const double cubicCentimeters = 450;

        private const int minimumHorsePower = 70;
        private const int maximumHorsePower = 100;

        public PowerMotorcycle(string model, int horsePower)
            : base(model, horsePower, cubicCentimeters)
        {

        }
        private int horsePower;
        public override int HorsePower
        {
            get
            {
                return this.horsePower;
            }
            protected set
            {
                if (!(value >= minimumHorsePower && value <= maximumHorsePower))
                {
                    throw new ArgumentException($"Invalid horse power: {value}.");
                }
                this.horsePower = value;
            }
        }
    }
}
