namespace TournamentDirector.Server.Models;

public class Country
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string FifaCode { get; set; }
    public required string Confederation { get; set; }
}
