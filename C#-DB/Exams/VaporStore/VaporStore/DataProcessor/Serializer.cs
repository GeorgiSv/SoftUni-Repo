namespace VaporStore.DataProcessor
{
	using System;
    using System.Linq;
    using Data;
    using Newtonsoft.Json;

    public static class Serializer
	{
		public static string ExportGamesByGenres(VaporStoreDbContext context, string[] genreNames)
		{
			var genersForExport = context
				.Genres
				.ToArray()
				.Where(g => genreNames.Contains(g.Name))
				.Select(ge => new
				{
					Id = ge.Id,
					Genre = ge.Name,
					Games = ge
					.Games
					.Where(gm => gm.Purchases.Count > 0)
					.ToArray()
					.OrderByDescending(g => g.Purchases.Count)
					.ThenBy(g => g.Id)
					.Select(gm => new
					{
						Id = gm.Id,
						Title = gm.Name,
						Developer = gm.Developer.Name,
						Tags = string.Join(", ", gm.GameTags.Select(t => t.Tag.Name)),
						Players = gm.Purchases.Count
					})
					.ToArray(),
					TotalPlayers = ge.Games.Sum(g => g.Purchases.Count)
				})
				.OrderByDescending(g => g.TotalPlayers)
				.ThenBy(g => g.Id)
				.ToArray();

			var json = JsonConvert.SerializeObject(genersForExport, Formatting.Indented);

			return json;
		}

		public static string ExportUserPurchasesByType(VaporStoreDbContext context, string storeType)
		{
			var usersForExport = context
				.Users
				.Select(u => new
				{
					Username = u.Username,
					Purchases = u.Cards.Select(p => p.Purchases)
					.Where(p => p.Select(pr => pr.Type.ToString()).Contains(storeType))
					.ToArray()
					.Select(p => new
                    {
                    })
					,
					TotalSpent = u.Cards.Select(c => c.Purchases.Sum(p => p.Game.Price))

				})
				.ToArray();

			throw new NotImplementedException();
		}
	}
}


//For each purchase, export its card number, CVC, date in the format "yyyy-MM-dd HH:mm" (make sure you use CultureInfo.InvariantCulture) and the game.
