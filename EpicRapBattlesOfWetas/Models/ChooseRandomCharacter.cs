using EpicRapBattlesOfWetas.Models.CharactersNames;
using EpicRapBattlesOfWetas.Models.CharactersNames.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpicRapBattlesOfWetas.Models
{
    public class ChooseRandomCharacter
    {
        public string Output;//null

        private int GetRandomNumber()
        {
            Random rnd = new Random();
            int result = rnd.Next(0, 3);

            return result;
        }

        public string Choose(string type)
        {

            int randomNumber = GetRandomNumber();

            INames names = null;
            string result = string.Empty;

            if (type == "Game Heroes")
            {
                names = new MCStarshyNames();
                result = names.GameHeroes[randomNumber];
            }
            else if (type == "Movie Characters")
            {
                names = new MCStarshyNames();
                result = names.MovieCharacters[randomNumber];
            }
            else if (type == "Famous People")
            {
                names = new MCStarshyNames();
                result = names.FamousPeople[randomNumber];
            }

            this.Output = result;
            return result;
        }
    }
}
