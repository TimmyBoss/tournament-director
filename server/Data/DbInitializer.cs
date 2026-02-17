using System.Data;
using Dapper;

namespace TournamentDirector.Server.Data;

public static class DbInitializer
{
    public static void Initialize(IDbConnection connection)
    {
        connection.Execute("""
            CREATE TABLE IF NOT EXISTS Countries (
                Id INTEGER PRIMARY KEY AUTOINCREMENT,
                Name TEXT NOT NULL,
                FifaCode TEXT NOT NULL UNIQUE,
                Confederation TEXT NOT NULL
            )
            """);

        var count = connection.ExecuteScalar<int>("SELECT COUNT(*) FROM Countries");
        if (count == 0)
            SeedData.Seed(connection);
    }
}
