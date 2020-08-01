namespace BookShop
{
    using BookShop.Models;
    using Data;
    using Initializer;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class StartUp
    {
        public static void Main()
        {
            using var db = new BookShopContext();
            //DbInitializer.ResetDatabase(db);

            string input = Console.ReadLine();

            var result = GetBooksReleasedBefore(db, input);

            Console.WriteLine(result);
        }

        //#1
        public static string GetBooksByAgeRestriction(BookShopContext context, string command)
        {
            var sb = new StringBuilder();

            var books = context
                .Books
                .Where(b => b.AgeRestriction.ToString().ToLower() == command.ToLower())
                .Select(b => b.Title)
                .OrderBy(bt => bt)
                .ToList();



            sb.AppendLine(string.Join(Environment.NewLine, books));


            return sb.ToString().TrimEnd();
        }
        //#2
        public static string GetGoldenBooks(BookShopContext context)
        {
            var sb = new StringBuilder();

            var bookTitles = context
                .Books
                .AsEnumerable()
                .Where(b => b.EditionType.ToString() == "Gold" && b.Copies < 5000)
                .OrderBy(b => b.BookId)
                .Select(b => b.Title)
                .ToList();

            sb.AppendLine(string.Join(Environment.NewLine, bookTitles));

            return sb.ToString().TrimEnd();
        }

        //#3
        public static string GetBooksByPrice(BookShopContext context)
        {
            var sb = new StringBuilder();

            var books = context
                 .Books
                 .AsEnumerable()
                 .Where(b => b.Price > 40)
                 .OrderByDescending(b => b.Price)
                 .Select(b => new { b.Title, b.Price })
                 .ToList();

            foreach (var book in books)
            {
                sb.AppendLine(string.Join(Environment.NewLine, $"{book.Title} - ${book.Price}"));
            }

            return sb.ToString().TrimEnd();
        }

        //#4
        public static string GetBooksNotReleasedIn(BookShopContext context, int year)
        {
            var sb = new StringBuilder();

            var bookTitles = context
                .Books
                .Where(b => b.ReleaseDate.Value.Year != year)
                .OrderBy(b => b.BookId)
                .Select(b => b.Title)
                .ToList();

            sb.AppendLine(string.Join(Environment.NewLine, bookTitles));

            return sb.ToString().TrimEnd();
        }

        public static string GetBooksByCategory(BookShopContext context, string input)
        {
            var sb = new StringBuilder();

            string[] categories = input.Split(" ", StringSplitOptions.RemoveEmptyEntries);

            var allBooksPerCategory = new List<string>();

            for (int i = 0; i < categories.Length; i++)
            {
                allBooksPerCategory.AddRange(context
                   .BooksCategories
                   .Where(b => b.Category.Name.ToLower() == categories[i].ToLower())
                   .Select(bc => bc.Book.Title)
                   .ToList());
            }

            foreach (var bookTitle in allBooksPerCategory.OrderBy(b => b))
            {
                sb.AppendLine(bookTitle);
            }

            return sb.ToString().TrimEnd();
        }

        public static string GetBooksReleasedBefore(BookShopContext context, string date)
        {
            var sb = new StringBuilder();

            var dateNumbers = date
                .Split("-")
                .Select(int.Parse)
                .ToArray();

            var givenDate = new DateTime(dateNumbers[2], dateNumbers[1], dateNumbers[0]);


            var books = context
                 .Books
                 .Where(b => b.ReleaseDate < givenDate)
                 .OrderByDescending(b=> b.ReleaseDate)
                 .Select(b => new
                 {
                     b.Title,
                     b.EditionType,
                     b.Price
                 })
                 .ToList();

            foreach (var book in books)
            {
                sb.AppendLine(book.Title + " - " + book.EditionType.ToString() + " - $" + book.Price);
            }
            return sb.ToString().TrimEnd();
        }

    }
}
