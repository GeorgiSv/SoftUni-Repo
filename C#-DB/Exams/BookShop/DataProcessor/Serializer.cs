namespace BookShop.DataProcessor
{
    using System;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml;
    using System.Xml.Serialization;
    using BookShop.Data.Models.Enums;
    using BookShop.DataProcessor.ExportDto;
    using Data;
    using Microsoft.SqlServer.Server;
    using Newtonsoft.Json;
    using Formatting = Newtonsoft.Json.Formatting;

    public class Serializer
    {
        public static string ExportMostCraziestAuthors(BookShopContext context)
        {
            var sb = new StringBuilder();

            var authors = context
                .Authors
                .Select(a => new
                {
                    AuthorName = a.FirstName + " " + a.LastName,
                    Books = a.AuthorsBooks
                    .OrderByDescending(b => b.Book.Price)
                    .Select(ab => new
                    {
                        BookName = ab.Book.Name,
                        BookPrice = $"{ab.Book.Price:f2}"
                    })
                    .ToArray()
                })
                .ToArray()
                .OrderByDescending(a => a.Books.Length)
                .ThenBy(a => a.AuthorName)
                .ToArray();


            var json = JsonConvert.SerializeObject(authors, Formatting.Indented);

            return json.ToString().TrimEnd();
        }

        public static string ExportOldestBooks(BookShopContext context, DateTime date)
        {

            var books = context
                .Books
                .OrderBy(a => a.PublishedOn)
                .Where(d => d.PublishedOn < date && d.Genre == Genre.Science)
                .Select(b => new ExportOldestBookDTO
                {
                    Name = b.Name,
                    Date = b.PublishedOn.ToString("d", CultureInfo.InvariantCulture),
                    Pages = b.Pages
                })
                .ToArray()
                .OrderByDescending(p => p.Pages)
                .ThenByDescending(d => d.Date)
                .Take(10)
                .ToArray();


            var serializer = new XmlSerializer(typeof(ExportOldestBookDTO[]), new XmlRootAttribute("Books"));
            var namespaces = new XmlSerializerNamespaces(new[] { new XmlQualifiedName() });

            var sb = new StringBuilder();
            serializer.Serialize(new StringWriter(sb), books, namespaces);

            return sb.ToString().TrimEnd();
        }


        private static string SerializeXml<T>(T[] objects, string root)
        {
            var serializer = new XmlSerializer(typeof(T[]), new XmlRootAttribute(root));
            var namespaces = new XmlSerializerNamespaces(new[] { new XmlQualifiedName() });

            var sb = new StringBuilder();

            serializer.Serialize(new StringWriter(sb), objects, namespaces);

            return sb.ToString().TrimEnd();
        }
    }
}