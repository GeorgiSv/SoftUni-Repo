using System;

namespace Exc05
{
    class Program
    {
        static void Main()
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int hight = int.Parse(Console.ReadLine());

            int freeSpace = width * length * hight;

            string command = Console.ReadLine(); ;
            int computersCount = 0;

            while (command != "Done")
            {
                if (command == "")
                {
                    continue;
                }

                computersCount += int.Parse(command);

                if (computersCount > freeSpace)
                {
                    Console.WriteLine($"No more free space! You need {computersCount - freeSpace} Cubic meters more.");
                    return;
                }
                command = Console.ReadLine();
            }

            Console.WriteLine($"{freeSpace - computersCount} Cubic meters left.");
        }
    }
}
