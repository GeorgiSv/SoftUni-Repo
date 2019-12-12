using MXGP.Repositories.Contracts;
using MXGP.Models.Motorcycles.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace MXGP.Repositories
{
    public class MotorcycleRepository : IRepository<IMotorcycle>
    {
        private List<IMotorcycle> models;

        public MotorcycleRepository()
        {
            this.models = new List<IMotorcycle>();
        }

        public IReadOnlyCollection<IMotorcycle> Models
            => this.models;
        public void Add(IMotorcycle model)
        {
            this.models.Add(model);
        }

        public IReadOnlyCollection<IMotorcycle> GetAll()
        {
            var collection = new List<IMotorcycle>();
            foreach (var model in this.models)
            {
                collection.Add(model);
            }
            return collection.AsReadOnly();
        }

        public IMotorcycle GetByName(string name)
        {
            return this.models.First(r => r.Model == name);
        }

        public bool Remove(IMotorcycle model)
        {
            var result = this.models.Remove(model);
            return result;
        }
    }
}
