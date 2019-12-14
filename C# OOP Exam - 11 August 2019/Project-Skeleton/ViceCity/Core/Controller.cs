using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViceCity.Core.Contracts;
using ViceCity.Models.Guns;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Neghbourhoods;
using ViceCity.Models.Players;
using ViceCity.Models.Players.Contracts;
using ViceCity.Repositories;

namespace ViceCity.Core
{
    public class Controller : IController
    {
        private GunRepository gunRepository;
        private MainPlayer mainPLayer;
        private ICollection<IPlayer> civilPlayers;
        private GangNeighbourhood neighbourhood;

        public Controller()
        {
            this.gunRepository = new GunRepository();
            this.mainPLayer = new MainPlayer();
            this.civilPlayers = new List<IPlayer>();
        }
        public string AddGun(string type, string name)
        {
            var gun = this.gunRepository.Models.FirstOrDefault(x => x.Name == name);

            if (type == "Pistol")
            {
                gun = new Pistol(name);
            }
            else if (type == "Rifle")
            {
                gun = new Rifle(name);
            }
            else
            {
                return "Invalid gun type!";
            }

            this.gunRepository.Add(gun);

            return $"Successfully added {gun.Name} of type: {gun.GetType().Name}";
        }

        public string AddGunToPlayer(string name)
        {
            var gun = gunRepository.Models.First();

            if (this.gunRepository.Models.Count <= 0)
            {
                return "There are no guns in the queue!";
            }
            if (name == "Vercetti")
            {
                mainPLayer.GunRepository.Add(gun);

                return $"Successfully added {gun.Name} to the Main Player: Tommy Vercetti";
            }

            var civilPlayer = civilPlayers.FirstOrDefault(p => p.Name == name);

            if (civilPlayers == null)
            {
                return $"Civil player with that name doesn't exists!";
            }

            return $"Successfully added {gun.Name} to the Civil Player: {civilPlayer.Name}";
        }

        public string AddPlayer(string name)
        {
            var civilPlayer = new CivilPlayer(name);

            return $"Successfully added civil player: {civilPlayer.Name}!";
        }

        public string Fight()
        {
            var currenLPMainPlayer = this.mainPLayer.LifePoints;
            var sumOfAllLPCivilPlayers = this.civilPlayers.Sum(p => p.LifePoints);
            
            this.neighbourhood.Action(this.mainPLayer, this.civilPlayers);

            if (currenLPMainPlayer == this.mainPLayer.LifePoints && sumOfAllLPCivilPlayers == this.civilPlayers.Sum(p => p.LifePoints))
            {
                return "Everything is okay!";
            }

            var sb = new StringBuilder();

            sb.AppendLine("A fight happened:");
            sb.AppendLine("Tommy live points: {mainPlayerLifePoints}!");
            sb.AppendLine("Tommy has killed: {deadCivilPlayers} players!");
            sb.AppendLine("Left Civil Players: {civilPlayersCount}!");

            return sb.ToString().TrimEnd();
        }
    }
}
