using Microsoft.EntityFrameworkCore;
using TournamentDirector.Server.Models;

namespace TournamentDirector.Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Country> Countries => Set<Country>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.FifaCode).IsRequired().HasMaxLength(3);
            entity.Property(e => e.Confederation).IsRequired().HasMaxLength(10);
            entity.HasIndex(e => e.FifaCode).IsUnique();
        });
    }
}
