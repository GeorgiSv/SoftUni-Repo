using MXGP.Core.Contracts;
using MXGP.Models.Motorcycles;
using MXGP.Models.Races;
using MXGP.Models.Riders;
using MXGP.Models.Riders.Contracts;
using MXGP.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MXGP.Core
{
    public class ChampionshipController : IChampionshipController
    {
        private MotorcycleRepository motorcycleRepository;
        private RiderRepository riderRepository;
        private RaceRepository raceRepository;

        public ChampionshipController()
        {
            this.motorcycleRepository = new MotorcycleRepository();
            this.riderRepository = new RiderRepository();
            this.raceRepository = new RaceRepository();
        }

        public string AddMotorcycleToRider(string riderName, string motorcycleModel)
        {
            var rider = this.riderRepository.Models.First(r => r.Name == riderName);

            if (rider == null)
            {
                throw new InvalidOperationException($"Rider {riderName} could not be found.");
            }

            var motorCycle = this.motorcycleRepository.Models.First(m => m.Model == riderName);

            if (motorCycle == null)
            {
                throw new InvalidOperationException($"Rider {motorcycleModel} could not be found.");
            }

            this.riderRepository.Models.First(r => r.Name == riderName).AddMotorcycle(motorCycle);
            return $"Rider {riderName} received motorcycle {motorcycleModel}.";
        }

        public string AddRiderToRace(string raceName, string riderName)
        {
            var race = this.raceRepository.Models.First(r => r.Name == raceName);

            if (race == null)
            {
                throw new InvalidOperationException($"Rider {raceName} could not be found.");
            }

            var rider = this.riderRepository.Models.First(r => r.Name == riderName);

            if (rider == null)
            {
                throw new InvalidOperationException($"Rider {riderName} could not be found.");
            }

            this.raceRepository.Models.First(r => r.Name == raceName).AddRider(rider);
            return $"Rider {riderName} added in {raceName} race.";
        }

        public string CreateMotorcycle(string type, string model, int horsePower)
        {
            var motorCycle = this.motorcycleRepository.Models.First(m => m.Model == model);

            if (motorCycle != null)
            {
                throw new ArgumentException($"Motorcycle {model} is already created.");
            }

            if (type == "Speed")
            {
                motorCycle = new SpeedMotorcycle(model, horsePower);
            }
            else if (type == "Power")
            {
                motorCycle = new PowerMotorcycle(model, horsePower);
            }

            this.motorcycleRepository.Add(motorCycle);
            return $"{type} {model} is created.";
        }

        public string CreateRace(string name, int laps)
        {
            var race = new Race(name, laps);

            if (raceRepository.Models.Any(r => r.Name == name))
            {
                throw new InvalidOperationException($"Race {name} is already created.");
            }

            this.raceRepository.Add(race);
            return $"Race {name} is created.";
        }

        public string CreateRider(string riderName)
        {
            var rider = new Rider(riderName);

            if (this.riderRepository.Models.Any(r => r.Name == riderName))
            {
                throw new ArgumentException($"Rider {riderName} is already created.");
            }

            this.riderRepository.Add(rider);
            return $"Rider {riderName} is created.";
        }

        public string StartRace(string raceName)
        {
            if (!this.raceRepository.Models.Any(r => r.Name == raceName))
            {
                throw new InvalidOperationException($"Race {raceName} could not be found.");
            }
            if (this.raceRepository.Models.Count < 3)
            {
                throw new InvalidOperationException($"Race {raceName} cannot start with less than 3 participants.");
            }

            var race = this.raceRepository.Models.First(r => r.Name == raceName);
            var fasterRiders = new Queue<IRider>();

            foreach (var rider in riderRepository.Models.OrderByDescending(x => x.Motorcycle.CalculateRacePoints(race.Laps)).Take(3))
            {
                fasterRiders.Enqueue(rider);
            }

            this.raceRepository.Remove(race);

            var sb = new StringBuilder();

            sb.AppendLine($"Rider {fasterRiders.Dequeue().Name} wins {raceName} race.");
            sb.AppendLine($"Rider {fasterRiders.Dequeue().Name} is second in {raceName} race.");
            sb.AppendLine($"Rider {fasterRiders.Dequeue().Name} is third in {raceName} race.");

            return sb.ToString().TrimEnd();
        }
    }
}
