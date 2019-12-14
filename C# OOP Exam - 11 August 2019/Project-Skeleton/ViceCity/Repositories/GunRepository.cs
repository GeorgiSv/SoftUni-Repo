using System;
using System.Collections.Generic;
using System.Text;
using ViceCity.Models.Guns.Contracts;
using ViceCity.Repositories.Contracts;

namespace ViceCity.Repositories
{
    public class GunRepository : IRepository<IGun>
    {
        private readonly List<IGun> models;

        public GunRepository()
        {
            this.models = new List<IGun>();
        }
        public IReadOnlyCollection<IGun> Models
            => this.models.AsReadOnly();

        public void Add(IGun model)
        {
            if (!this.models.Contains(model))
            {
                this.models.Add(model);
            }
        }

        public IGun Find(string name)
        {
            return this.models.Find(x => x.Name == name);
        }

        public bool Remove(IGun model)
        {
            return this.models.Remove(model);
        }
    }
}
