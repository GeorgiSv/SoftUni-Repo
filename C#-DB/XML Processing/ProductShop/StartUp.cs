using ProductShop.Data;
using ProductShop.Models;
using System.Linq;
using System;
using System.IO;
using System.Xml.Serialization;
using ProductShop.Dtos.Import;
using System.Collections.Generic;

namespace ProductShop
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var projectDir = File.ReadAllText("./../../../Datasets/users.xml");

            using (var db = new ProductShopContext())
            {
                var xml = projectDir;
                var result = ImportUsers(db, xml);

                Console.WriteLine(result);
            }
        }

        public static string ImportUsers(ProductShopContext context, string inputXml)
        {
            //var serializer = new XmlSerializer(typeof(UserDTO[]), new XmlRootAttribute("Users"));
            //var deserialisedArray = (UserDTO[])serializer.Deserialize(new StringReader(inputXml));

            var xmlDeserializedArray = DeserializeObject<UserDTO>("Users" ,inputXml);

            var usersForImport = new List<User>();

            foreach (var user in xmlDeserializedArray)
            {
                var currentUser = new User()
                {
                    FirstName = user.firstName,
                    LastName = user.lastName,
                    Age = user.age
                };

                usersForImport.Add(currentUser);
            }

            context.Users.AddRange(usersForImport);
            context.SaveChanges();

            return $"Successfully imported {usersForImport.Count}";
        }

        private static T[] DeserializeObject<T>(string rootNameLement, string xml)
        {
            var serializer = new XmlSerializer(typeof(T[]), new XmlRootAttribute(rootNameLement));
            var deserializedObjAsArray = (T[])serializer.Deserialize(new StringReader(xml));

            return deserializedObjAsArray;
        }
    }
}