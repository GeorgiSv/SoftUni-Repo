using MXGP.Repositories.Contracts;
using MXGP.Models.Riders.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace MXGP.Repositories
{
    public class RiderRepository : IRepository<IRider>
    {
        private List<IRider> models;

        public RiderRepository()
        {
            this.models = new List<IRider>();
        }

        public IReadOnlyCollection<IRider> Models
            => this.models;
        public void Add(IRider model)
        {
            this.models.Add(model);
        }

        public IReadOnlyCollection<IRider> GetAll()
        {
            var collection = new List<IRider>();
            foreach (var model in this.models)
            {
                collection.Add(model);
            }
            return collection.AsReadOnly();
        }

        public IRider GetByName(string name)
        {
            return this.models.FirstOrDefault(r => r.Name == name);
        }

        public bool Remove(IRider model)
        {
            var result = this.models.Remove(model);
            return result;
        }
    }
}
