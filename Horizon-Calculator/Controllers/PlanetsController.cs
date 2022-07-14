using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HorizonCalculator.Controllers;

public class AppContext : DbContext
    {
        public DbSet<Planet>? Planets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Add Connection String Here");
        }
    }

[ApiController]
[Route("Planets")]
public class PlanetsCalculator : ControllerBase
{
    [HttpGet]
    public List<Planet> Planets()
    {
        using (var db = new AppContext())
        {
            var planets = from p in db.Planets select p;
            return planets.ToList();
        }
    }

    [HttpPost]
    public void Create([FromBody] PlanetInfo planetInfo)
    {
        var newPlanet = new Planet { Name = planetInfo.Name, Radius = planetInfo.Radius };
        using (var db = new AppContext())
        {
            
             db.Add(newPlanet);
             db.SaveChanges();
        }
    }

    [HttpDelete]
    [Route("{id}")]
    public void Delete(int id)
    {
        using (var db = new AppContext())
        {
            var planet = from p in db.Planets
                         where p.Id == id
                         select p;
            if (planet.FirstOrDefault() != null)
            {
                db.Remove(planet.First());
                db.SaveChanges();
            }
        }
    }
}
