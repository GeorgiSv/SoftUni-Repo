using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
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

                //var JSONUsers = File.ReadAllText("./../../../Datasets/users.json");
                //var JSONProducts = File.ReadAllText("./../../../Datasets/products.json");
                //var JSONCategories =  File.ReadAllText("./../../../Datasets/categories.json");
                //var JSONCategoriesProducts =  File.ReadAllText("./../../../Datasets/categories-products.json");

                var result = GetSoldProducts(db);

                Console.WriteLine(result);
            }
        }

        //Problem 1
        public static string ImportUsers(ProductShopContext context, string inputJson)
        {
            var deserializedJSON = JsonConvert.DeserializeObject<User[]>(inputJson);

            context.Users.AddRange(deserializedJSON);
            context.SaveChanges();

            return $"Successfully imported {deserializedJSON.Length}";
        }
        //Problem 2
        public static string ImportProducts(ProductShopContext context, string inputJson)
        {
            var deserializedJSON = JsonConvert.DeserializeObject<Product[]>(inputJson);

            context.Products.AddRange(deserializedJSON);
            context.SaveChanges();

            return $"Successfully imported {deserializedJSON.Length}";
        }

        //Problem 3
        public static string ImportCategories(ProductShopContext context, string inputJson)
        {

            var deserializedJSON = JsonConvert.DeserializeObject<Category[]>(inputJson);

            foreach (var category in deserializedJSON)
            {
                if (category.Name != null)
                {
                    context.Categories.Add(category);
                    context.SaveChanges();
                }
            }
           
            return $"Successfully imported {deserializedJSON.Length}";
        }
        //Problem 4
        public static string ImportCategoryProducts(ProductShopContext context, string inputJson)
        {
            var deserializedJSON = JsonConvert.DeserializeObject<CategoryProduct[]>(inputJson);

            context.CategoryProducts.AddRange(deserializedJSON);
            context.SaveChanges();

            return $"Successfully imported {deserializedJSON.Length}";
        }

        //Problem 5
        public static string GetProductsInRange(ProductShopContext context)
        {
            var products = context
                .Products
                .Where(p => p.Price >= 500 && p.Price <= 1000)
                .Select(p => new
                {
                    name = p.Name,
                    price = p.Price,
                    seller = p.Seller.FirstName + " " + p.Seller.LastName
                })
                .OrderBy(p => p.price)
                .ToList();

            var json = JsonConvert.SerializeObject(products, Formatting.Indented);

            return json;
        }

        //Problem 6
        public static string GetSoldProducts(ProductShopContext context)
        {
            var users = context
                .Users
                .Where(u => u.ProductsSold.Count >= 1)
                .Select(u => new
                {
                    firstName = u.FirstName,
                    lastName = u.LastName,
                    soldProducts = u.ProductsSold.Select(p => new
                    {
                        name = p.Name,
                        price = p.Price,
                        buyerFirstName = p.Buyer.FirstName,
                        buyerLastName = p.Buyer.LastName
                    })
                })
                .OrderBy(u => u.firstName)
                .ToList();

            var json = JsonConvert.SerializeObject(users, Formatting.Indented);

            return json;
        }
    }
}