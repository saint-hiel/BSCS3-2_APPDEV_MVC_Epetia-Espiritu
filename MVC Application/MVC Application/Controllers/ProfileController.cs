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
                Name = "John Doe",
                Age = 30,
                Course = "Computer Science",
                About = "Software developer with experience in C# and ASP.NET",
                Skills = new List<string> { "C#", "ASP.NET", "MVC", "SQL" },
            };
            return View(profile);
        }
    }
}
