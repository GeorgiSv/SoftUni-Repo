using EpicRapBattlesOfWetas.Models.CharactersNames.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpicRapBattlesOfWetas.Models.CharactersNames
{
    public class MCStarshyNames : INames
    {
        private List<string> gameHeroes = new List<string>
        {
            "Kenshi",
            "Super Mario",
            "Trevor",
            "Goro",
            "",
        };
        private List<string> famousPeople = new List<string>
        {
            "Roland Atkinson",
            "Slavi",
            "Karl Marx",
            "Spidy",
        };
        private List<string> movieCharacters = new List<string>
        {
            "Thor",
            "Dumbledoor",
            "DeadPool",
            "Spidy",
        };

        public List<string> GameHeroes
            => this.gameHeroes;

        public List<string> FamousPeople
            => this.famousPeople;

        public List<string> MovieCharacters
            => this.movieCharacters;
    }
}
