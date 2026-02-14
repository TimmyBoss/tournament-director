using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TournamentDirector.Server.Data;
using TournamentDirector.Server.Models;

namespace TournamentDirector.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CountriesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
    {
        return await _context.Countries.OrderBy(c => c.Name).ToListAsync();
    }

    [HttpGet("{fifaCode}")]
    public async Task<ActionResult<Country>> GetCountry(string fifaCode)
    {
        var country = await _context.Countries
            .FirstOrDefaultAsync(c => c.FifaCode == fifaCode.ToUpperInvariant());

        if (country == null)
            return NotFound();

        return country;
    }

    [HttpGet("confederation/{confederation}")]
    public async Task<ActionResult<IEnumerable<Country>>> GetByConfederation(string confederation)
    {
        return await _context.Countries
            .Where(c => c.Confederation == confederation.ToUpperInvariant())
            .OrderBy(c => c.Name)
            .ToListAsync();
    }
}
