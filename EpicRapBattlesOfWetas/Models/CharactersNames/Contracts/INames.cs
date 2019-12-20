using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpicRapBattlesOfWetas.Models.CharactersNames.Contracts
{
    public interface INames
    {
        List<string> GameHeroes { get; }

        List<string> FamousPeople { get; }
        List<string> MovieCharacters { get; }

    }
}
