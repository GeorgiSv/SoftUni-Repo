using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using ProductShop.Data;
using ProductShop.Models;

namespace ProductShop
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            using (var db = new ProductShopContext())
            {
                var JSON = File.ReadAllText("./../../../Datasets/users.json");

                Console.WriteLine(ImportUsers(db, JSON));
            }

        }

        public static string ImportUsers(ProductShopContext context, string inputJson)
        {
            var deserializedJSON = JsonConvert.DeserializeObject<User[]>(inputJson);

            context.Users.AddRange(deserializedJSON);
            context.SaveChanges();

            return $"Successfully imported {deserializedJSON.Length}";
        }
    }
}