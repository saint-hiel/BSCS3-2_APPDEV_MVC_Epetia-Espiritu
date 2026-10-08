using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MVC_Application.Models;

namespace MVC_Application.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            var profile = new ProfileModel
            {
                Name = "Gemicah Espiritu",
                Age = 20,
                Course = "BSCS 3-2",
                Role = "Feature Writer | Aspiring Software Developer",
                About = "I write features, which means I'm professionally nosy and personally attached to a good opening line. " +
                "Most of my pieces are in Filipino, and I like them witty, creative, and with a little bite. " +
                "Lately I've been learning  about web development, where the plot twists are mostly bugs. Like any good feature, it's getting rewritten until it reads right.",
                Interests = new List<string> { "Writing", "Software Development (WIP)", "Puzzles", "Web Development (WIP)", "Detective games" },   
                Skills = new List<string> { "Feature Writing", "Copyreading and Headline Writing", "C# & ASP.NET (learning)", "HTML & CSS", "C", "Java"},
            };
            return View(profile);
        }
    }
}
