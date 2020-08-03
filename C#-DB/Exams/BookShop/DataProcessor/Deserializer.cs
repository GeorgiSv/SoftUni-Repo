namespace BookShop.DataProcessor
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml.Serialization;
    using BookShop.Data.Models;
    using BookShop.Data.Models.Enums;
    using BookShop.DataProcessor.ImportDto;
    using Data;
    using Newtonsoft.Json;
    using ValidationContext = System.ComponentModel.DataAnnotations.ValidationContext;

    public class Deserializer
    {
        private const string ErrorMessage = "Invalid data!";

        private const string SuccessfullyImportedBook
            = "Successfully imported book {0} for {1:F2}.";

        private const string SuccessfullyImportedAuthor
            = "Successfully imported author - {0} with {1} books.";

        public static string ImportBooks(BookShopContext context, string xmlString)
        {
            var sb = new StringBuilder();

            var deserialisedBooks = DeserializeObject<ImportBookDTO>("Books", xmlString);

            var validBooks = new List<Book>();

            foreach (var book in deserialisedBooks)
            {
                if (!IsValid(book))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var date = DateTime.ParseExact(book.PublishedOn, "MM/dd/yyyy", CultureInfo.InvariantCulture);

                var validBook = new Book()
                {
                    Name = book.Name,
                    Genre = (Genre)book.Genre,
                    Price = book.Price,
                    Pages = book.Pages,
                    PublishedOn = date,
                };

                validBooks.Add(validBook);
                sb.AppendLine(string.Format(SuccessfullyImportedBook, book.Name, book.Price));
            }

            context.Books.AddRange(validBooks);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }

        public static string ImportAuthors(BookShopContext context, string jsonString)
        {
            var sb = new StringBuilder();

            var deserialesdAuthors = JsonConvert.DeserializeObject<ImportAuthorDTO[]>(jsonString);

            var authors = new List<Author>();

            foreach (var author in deserialesdAuthors)
            {
                if (!IsValid(author))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var exist = authors.FirstOrDefault(a => a.Email == author.Email);

                if (exist != null)
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var validAuthor = new Author()
                {
                    FirstName = author.FirstName,
                    LastName = author.LastName,
                    Email = author.Email,
                    Phone = author.Phone
                };

                var uniqueBooks = author.Books.Distinct();

                foreach (var book in uniqueBooks)
                {
                    var validBook = context.Books.Find(book.Id);

                    if (validBook == null)
                    {
                        continue;
                    }

                    validAuthor.AuthorsBooks.Add(new AuthorBook
                    {
                        Author = validAuthor,
                        Book = validBook
                    });
                }

                if (validAuthor.AuthorsBooks.Count == 0)
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                authors.Add(validAuthor);
                sb.AppendLine(string.Format(SuccessfullyImportedAuthor, validAuthor.FirstName + " " + validAuthor.LastName, validAuthor.AuthorsBooks.Count));
            }

            context.Authors.AddRange(authors);
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