namespace Exc01
{
    using System;
    public class Program
    {
        public static void Main()
        {
            double mackerelPriceKg = double.Parse(Console.ReadLine());
            double cacalPriceKg = double.Parse(Console.ReadLine());
            double palamudKilos = double.Parse(Console.ReadLine());
            double safridKilos = double.Parse(Console.ReadLine());
            double musselsKilos = double.Parse(Console.ReadLine());

            double palamudPriceKg = mackerelPriceKg + mackerelPriceKg * 0.60;
            double safridPriceKg = cacalPriceKg + cacalPriceKg * 0.80;
            double musselsPriceKg = 7.50;

            double palamudSum = palamudKilos * palamudPriceKg;
            double safridlSum = safridKilos * safridPriceKg;
            double musselsSum = musselsPriceKg * musselsKilos;

            double result = palamudSum + safridlSum + musselsSum;
            Console.WriteLine($"{result:F2}");
        }
    }
}
