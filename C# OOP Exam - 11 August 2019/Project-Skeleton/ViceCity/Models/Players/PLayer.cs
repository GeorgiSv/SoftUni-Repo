using System;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Models.Guns;
using ViceCity.Models.Players.Contracts;
using ViceCity.Repositories.Contracts;
using ViceCity.Repositories;

namespace ViceCity.Models.Players
{
    public abstract class PLayer : IPlayer
    {
        private string name;
        private int lifepoints;
        private IRepository<IGun> gunRepository;

        public  PLayer(string name, int lifePoints)
        {
            this.Name = name;
            this.LifePoints = lifePoints;
            this.gunRepository = new GunRepository();
        }
        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Player's name cannot be null or a whitespace!");

                }
                this.name = value;
            }
        }

        public bool IsAlive
             => this.LifePoints > 0;

        public IRepository<IGun> GunRepository
            => this.gunRepository;

        public int LifePoints
        {
            get
            {
                return this.lifepoints;
            }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Player life points cannot be below zero!");
                }
                this.lifepoints = value;
            }
        }

        public void TakeLifePoints(int points)
        {
            this.LifePoints -= points;

            if (this.LifePoints > 0)
            {
                this.LifePoints = 0;
            }
        }
    }
}
