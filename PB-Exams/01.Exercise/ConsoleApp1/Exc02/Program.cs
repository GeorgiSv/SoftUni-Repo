using System;

namespace Exc02
{
    class Program
    {
        static void Main()
        {
            double movieBudget = double.Parse(Console.ReadLine());
            int statistsCount = int.Parse(Console.ReadLine());
            double clothePrice = double.Parse(Console.ReadLine());

            //Calculate the decoration
            double decorationPrice = movieBudget * 0.10;

            //Check for discount
            if (statistsCount > 150)
            {
                clothePrice -= clothePrice * 0.10; 
            }

            //Calculate the needed money
            double clothesMoney = clothePrice * statistsCount;
            double neededMoney = decorationPrice + clothesMoney;

            //Check if budget is enough
            if (neededMoney > movieBudget)
            {
                Console.WriteLine("Not enough money!");
                Console.WriteLine($"Wingard needs {(neededMoney - movieBudget):f2} leva more.");
            }
            else
            {
                Console.WriteLine("Action!");
                Console.WriteLine($"Wingard starts filming with {(movieBudget - neededMoney):f2} leva left.");
            }
        }
    }
}
