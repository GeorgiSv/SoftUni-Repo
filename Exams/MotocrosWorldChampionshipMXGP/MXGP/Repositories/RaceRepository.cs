using MXGP.Models.Races.Contracts;
using MXGP.Repositories.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace MXGP.Repositories
{
    public class RaceRepository :IRepository<IRace>
    {

        private List<IRace> models;

        public RaceRepository()
        {
            this.models = new List<IRace>();
        }

        public IReadOnlyCollection<IRace> Models
            => this.models;
        public void Add(IRace model)
        {
            this.models.Add(model);
        }

        public IReadOnlyCollection<IRace> GetAll()
        {
            var collection = new List<IRace>();
            foreach (var model in this.models)
            {
                collection.Add(model);
            }
            return collection.AsReadOnly();
        }

        public IRace GetByName(string name)
        {
            return this.models.First(r => r.Name == name);
        }

        public bool Remove(IRace model)
        {
            var result = this.models.Remove(model);
            return result;
        }
    }
}
