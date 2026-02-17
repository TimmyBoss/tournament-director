using System.Data;
using Microsoft.Data.Sqlite;
using TournamentDirector.Server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IDbConnection>(_ =>
{
    var connection = new SqliteConnection("Data Source=tournament-director.db");
    connection.Open();
    return connection;
});
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var connection = scope.ServiceProvider.GetRequiredService<IDbConnection>();
    DbInitializer.Initialize(connection);
}

app.UseCors();
app.MapControllers();
app.Run();
