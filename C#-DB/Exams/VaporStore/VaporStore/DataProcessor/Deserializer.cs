namespace VaporStore.DataProcessor
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml.Serialization;
    using Data;
    using Newtonsoft.Json;
    using VaporStore.Data.Models;
    using VaporStore.Data.Models.Enums;
    using VaporStore.DataProcessor.Dto;
    using VaporStore.DataProcessor.Dto.Import;

    public static class Deserializer
    {
        private const string ErrorMessage = "Invalid Data";


        public static string ImportGames(VaporStoreDbContext context, string jsonString)
        {
            var sb = new StringBuilder();
            var deserializedGames = JsonConvert.DeserializeObject<GameDTO[]>(jsonString);

            var gamesForImport = new List<Game>();
            var addedDevelopers = new List<Developer>();
            var addedGenres = new List<Genre>();
            var addedTags = new List<Tag>();


            var counter = 0;

            foreach (var currentDTOGame in deserializedGames)
            {
                if (!IsValid(currentDTOGame))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                if (currentDTOGame.Tags.Length <= 0 || currentDTOGame.Name == "Invalid")
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                counter++;
                var newGame = new Game()
                {
                    Name = currentDTOGame.Name,
                    Price = currentDTOGame.Price,
                    ReleaseDate = DateTime.ParseExact(currentDTOGame.ReleaseDate, "yyyy-MM-dd", CultureInfo.InvariantCulture),
                };

                var newDeveloper = addedDevelopers.FirstOrDefault(d => d.Name == currentDTOGame.Developer);
                if (newDeveloper == null)
                {
                    newDeveloper = new Developer()
                    {
                        Name = currentDTOGame.Developer
                    };
                    addedDevelopers.Add(newDeveloper);
                }

                var newGenre = addedGenres.FirstOrDefault(g => g.Name == currentDTOGame.Genre);

                if (newGenre == null)
                {
                    newGenre = new Genre()
                    {
                        Name = currentDTOGame.Genre
                    };
                    addedGenres.Add(newGenre);
                }

                newGame.Developer = newDeveloper;
                newGame.Genre = newGenre;

                var uniqueTags = currentDTOGame.Tags.Distinct();
                var tags = new List<Tag>();

                foreach (var tag in uniqueTags)
                {
                    if (string.IsNullOrEmpty(tag))
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }
                    var newTag = addedTags.FirstOrDefault(t => t.Name == tag);

                    if (newTag == null)
                    {
                        newTag = new Tag()
                        {
                            Name = tag
                        };
                        addedTags.Add(newTag);
                    }

                    newGame.GameTags.Add(new GameTag
                    {
                        Game = newGame,
                        Tag = newTag
                    });
                }

                gamesForImport.Add(newGame);
                sb.AppendLine($"Added {newGame.Name} ({newGame.Genre.Name}) with {newGame.GameTags.Count} tags");
            }

            context.Games.AddRange(gamesForImport);
            context.SaveChanges();


            return sb.ToString().TrimEnd();
        }

        public static string ImportUsers(VaporStoreDbContext context, string jsonString)
        {
            var sb = new StringBuilder();
            var deserializedUsers = JsonConvert.DeserializeObject<UserDTO[]>(jsonString);

            var usersForImport = new List<User>();

            foreach (var currentUserDTO in deserializedUsers)
            {
                if (!IsValid(currentUserDTO))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var newUser = new User()
                {
                    FullName = currentUserDTO.FullName,
                    Username = currentUserDTO.Username,
                    Email = currentUserDTO.Email,
                    Age = currentUserDTO.Age
                };

                foreach (var currentCard in currentUserDTO.Cards)
                {
                    if (!IsValid(currentCard))
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    var newCard = new Card()
                    {
                        Number = currentCard.Number,
                        Cvc = currentCard.CVC,
                        Type = (CardType)Enum.Parse(typeof(CardType), currentCard.Type)
                    };

                    newUser.Cards.Add(newCard);
                }

                sb.AppendLine($"Imported {newUser.Username} with {newUser.Cards.Count} cards");
                usersForImport.Add(newUser);
            }

            context.Users.AddRange(usersForImport);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }



        public static string ImportPurchases(VaporStoreDbContext context, string xmlString)
        {
            var sb = new StringBuilder();

            var deserializedPurchases = DeserializeObject<PurchasesDTO>("Purchases", xmlString);

            var purchasesForImport = new List<Purchase>();

            foreach (var currentDTOPurchase in deserializedPurchases)
            {
                if (!IsValid(currentDTOPurchase))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var newCard = context.Cards.FirstOrDefault(c => c.Number == currentDTOPurchase.Card);
                var newGame = context.Games.FirstOrDefault(g => g.Name == currentDTOPurchase.Title);

                var newPurchase = new Purchase()
                {
                    Type = (PurchaseType)Enum.Parse(typeof(PurchaseType), currentDTOPurchase.Type),
                    ProductKey = currentDTOPurchase.ProductKey,
                    Card = newCard,
                    Date = DateTime.ParseExact(currentDTOPurchase.Date, "dd/MM/yyyy HH:mm", CultureInfo.InvariantCulture),
                    Game = newGame

                };

                purchasesForImport.Add(newPurchase);
                sb.AppendLine($"Imported {currentDTOPurchase.Title} for {newPurchase.Card.User.Username}");
            }

            context.Purchases.AddRange(purchasesForImport);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }

        private static bool IsValid(object dto)
        {
            var validationContext = new ValidationContext(dto);
            var validationResult = new List<ValidationResult>();

            return Validator.TryValidateObject(dto, validationContext, validationResult, true);
        }

        private static T[] DeserializeObject<T>(string rootNameLement, string xml)
        {
            var serializer = new XmlSerializer(typeof(T[]), new XmlRootAttribute(rootNameLement));
            var deserializedObjAsArray = (T[])serializer.Deserialize(new StringReader(xml));

            return deserializedObjAsArray;
        }

    }
}