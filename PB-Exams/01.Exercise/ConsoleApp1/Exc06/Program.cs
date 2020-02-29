using System;

namespace Exc06
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNumberMax = int.Parse(Console.ReadLine());
            int secondNumberMax = int.Parse(Console.ReadLine());
            int thirdNumberMax = int.Parse(Console.ReadLine());


            for (int i = 1; i <= firstNumberMax; i++)
            {
                int currentFirst = i;

                //Check if is odd or even
                if (!(currentFirst % 2 == 0))
                {
                    continue;
                }
                for (int j = 2; j <= secondNumberMax; j++)
                {
                    int currentSecond = j;
                    if (!IsPrime(currentSecond))
                    {
                        continue;
                    }

                    for (int k = 1; k <= thirdNumberMax; k++)
                    {
                        int currentThird = k;
                        if (!(currentThird % 2 == 0))
                        {
                            continue;
                        }
                        //Printing..
                        Console.Write($"{currentFirst} {currentSecond} {currentThird}");
                        Console.WriteLine();
                    }
                }
            }
        }
        //Method to check if the number is prime
        public static bool IsPrime(int number)
        {
            if (number <= 1) return false;
            if (number == 2) return true;
            if (number % 2 == 0) return false;

            var boundary = (int)Math.Floor(Math.Sqrt(number));

            for (int i = 3; i <= boundary; i += 2)
                if (number % i == 0)
                    return false;

            return true;
        }
    }
}
