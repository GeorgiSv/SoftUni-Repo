using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViceCity.Models.Neghbourhoods.Contracts;
using ViceCity.Models.Players.Contracts;

namespace ViceCity.Models.Neghbourhoods
{
    public class GangNeighbourhood : INeighbourhood
    {
        public void Action(IPlayer mainPlayer, ICollection<IPlayer> civilPlayers)
        {
            bool endOfShooting = false;

            foreach (var civilPlayer in civilPlayers)
            {
                while (civilPlayer.LifePoints > 0)
                {
                    if (mainPlayer.GunRepository.Models.Where(g => g.CanFire).First().CanFire)
                    {
                        endOfShooting = true;
                        break;
                    }
                    civilPlayer.TakeLifePoints(mainPlayer.GunRepository.Models.Where(g => g.CanFire).First().Fire());
                }
                if (endOfShooting)
                {
                    break;
                } 
            }

            if (civilPlayers.Count > 0)
            {
                foreach (var civilPlayer in civilPlayers)
                {
                    while (mainPlayer.LifePoints > 0)
                    {
                        if (!mainPlayer.GunRepository.Models.Where(g => g.CanFire).First().CanFire)
                        {
                            break;
                        }
                        mainPlayer.TakeLifePoints(civilPlayer.GunRepository.Models.Where(g => g.CanFire).First().Fire());

                        if (!mainPlayer.IsAlive)
                        {
                            break;
                        }
                    }
                }
            }
        }
    }
}
