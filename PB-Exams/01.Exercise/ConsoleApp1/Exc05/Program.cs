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

            //calculate the free space
            int freeSpace = width * length * hight;

            //Creating varaiables to keep data
            string command = Console.ReadLine(); ;
            int computersCount = 0;

            //until Done command is received..
            while (command != "Done")
            {
                //Parse the command to number and add it to computers count
                computersCount += int.Parse(command);

                if (computersCount > freeSpace)
                {
                    Console.WriteLine($"No more free space! You need {computersCount - freeSpace} Cubic meters more.");
                    //finish the programm in order to not show the last line
                    return;
                }
                command = Console.ReadLine();
            }
            //Last line
            Console.WriteLine($"{freeSpace - computersCount} Cubic meters left.");
        }
    }
}
