using System;

namespace Exc03
{
    class Program
    {
        static void Main(string[] args)
        {
            string counttry = Console.ReadLine();
            string dates = Console.ReadLine();
            int nightsCount = int.Parse(Console.ReadLine());

            //Make varaiable to store the needed money
            var neededMoney = 0;

            switch (counttry)
            {
                //Checking th country

                case "France":
                    //Checking the dates
                    if (dates == "21-23")
                    {
                        neededMoney = nightsCount * 30;
                    }
                    else if (dates == "24-27")
                    {
                        neededMoney = nightsCount * 35;
                    }
                    else if (dates == "28-31")
                    {
                        neededMoney = nightsCount * 40;
                    }
                    break;
                case "Italy":
                    if (dates == "21-23")
                    {
                        neededMoney = nightsCount * 28;
                    }
                    else if (dates == "24-27")
                    {
                        neededMoney = nightsCount * 32;
                    }
                    else if (dates == "28-31")
                    {
                        neededMoney = nightsCount * 39;
                    }
                    break;
                case "Germany":
                    if (dates == "21-23")
                    {
                        neededMoney = nightsCount * 32;
                    }
                    else if (dates == "24-27")
                    {
                        neededMoney = nightsCount * 37;
                    }
                    else if (dates == "28-31")
                    {
                        neededMoney = nightsCount * 43;
                    }
                    break;
            }
            //Print
            Console.WriteLine($"Easter trip to {counttry} : {neededMoney:f2} leva.");
        }
    }
}
