using ViceCity.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using ViceCity.IO.Contracts;
using ViceCity.IO;
using ViceCity.Models.Players;

namespace ViceCity.Core
{
    public class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;
        private IController controller;

        public Engine()
        {
            this.reader = new Reader();
            this.writer = new Writer();
            this.controller = new Controller();
        }
        public void Run()
        {
            while (true)
            {
                var input = reader.ReadLine().Split();
                if (input[0] == "Exit")
                {
                    Environment.Exit(0);
                }
                try
                {
                    if (input[0] == "AddPlayer")
                    {
                        string name = input[1];

                        this.writer.WriteLine(this.controller.AddPlayer(name));
                    }
                    else if (input[0] == "AddGun")
                    {
                        string type = input[1];
                        string name = input[2];

                        this.writer.WriteLine(this.controller.AddGun(type, name));
                    }
                    else if (input[0] == "AddGunToPlayer")
                    {
                        string name = input[1];

                        this.writer.WriteLine(this.controller.AddGunToPlayer(name));
                    }
                    else if (input[0] == "Fight")
                    {
                        this.writer.WriteLine(this.controller.Fight());
                    }            
                }
                catch (Exception ex)
                {
                    writer.WriteLine(ex.Message);
                }
            }
        }
    }
}
