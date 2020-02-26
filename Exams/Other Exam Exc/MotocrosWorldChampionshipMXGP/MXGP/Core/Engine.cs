using MXGP.Core.Contracts;
using System;

namespace MXGP.Core
{
    public class Engine : IEngine
    {
        private ChampionshipController championshipController;
        public Engine()
        {
            this.championshipController = new ChampionshipController();
        }

        public void Run()
        {
            while (true)
            {
                try
                {
                    var input = Console.ReadLine().Split();
                    var command = input[0];

                    if (command == "End")
                    {
                        break;
                    }

                    if (command == "CreateRider")
                    {
                        string name = input[1];
                        Console.WriteLine(this.championshipController.CreateRider(name));
                    }
                    else if (command == "CreateMotorcycle")
                    {
                        string type = input[1];
                        string model = input[2];
                        int horsePower = int.Parse(input[3]);
                        Console.WriteLine(this.championshipController.CreateMotorcycle(type, model, horsePower));

                    }
                    else if (command == "AddMotorcycleToRider")
                    {
                        string riderName = input[1];
                        string motorCycleName = input[2];
                        Console.WriteLine(this.championshipController.AddMotorcycleToRider(riderName, motorCycleName));
                    }
                    else if (command == "AddRiderToRace")
                    {
                        string raceName = input[1];
                        string ridereName = input[2];
                        Console.WriteLine(this.championshipController.AddRiderToRace(raceName, ridereName));
                    }
                    else if (command == "CreateRace")
                    {
                        string raceName = input[1];
                        int laps = int.Parse(input[2]);
                        Console.WriteLine(this.championshipController.CreateRace(raceName, laps));
                    }
                    else if (command == "StartRace")
                    {
                        string raceName = input[1];
                        Console.WriteLine(this.championshipController.StartRace(raceName));
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }
}
