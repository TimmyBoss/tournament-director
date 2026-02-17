using System.Data;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using TournamentDirector.Server.Models;

namespace TournamentDirector.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
    private readonly IDbConnection _db;

    public CountriesController(IDbConnection db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
    {
        var countries = await _db.QueryAsync<Country>(
            "SELECT Id, Name, FifaCode, Confederation FROM Countries ORDER BY Name");
        return Ok(countries);
    }

    [HttpGet("{fifaCode}")]
    public async Task<ActionResult<Country>> GetCountry(string fifaCode)
    {
        var country = await _db.QueryFirstOrDefaultAsync<Country>(
            "SELECT Id, Name, FifaCode, Confederation FROM Countries WHERE FifaCode = @FifaCode",
            new { FifaCode = fifaCode.ToUpperInvariant() });

        if (country == null)
            return NotFound();

        return country;
    }

    [HttpGet("confederation/{confederation}")]
    public async Task<ActionResult<IEnumerable<Country>>> GetByConfederation(string confederation)
    {
        var countries = await _db.QueryAsync<Country>(
            "SELECT Id, Name, FifaCode, Confederation FROM Countries WHERE Confederation = @Confederation ORDER BY Name",
            new { Confederation = confederation.ToUpperInvariant() });
        return Ok(countries);
    }
}
