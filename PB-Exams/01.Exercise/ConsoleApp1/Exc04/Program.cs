using System;

namespace Exc04
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            int s = int.Parse(Console.ReadLine());

            while (m >= n)
            {
                if (m % 2 == 00 && m % 3 == 0)
                {
                    if (m == s)
                    {
                        return;
                    }
                    Console.Write(m + " ");
                }
                m--;
            }
        }
    }
}
