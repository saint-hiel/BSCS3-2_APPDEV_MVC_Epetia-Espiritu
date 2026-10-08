using Microsoft.AspNetCore.Mvc;
using MVC_Application.Models;

namespace MVC_Application.Controllers
{
    public class PortfolioController : Controller
    {
        public IActionResult Index()
        {
            var projects = new List<ProjectModel>
            {
                new ProjectModel      
                {
                    Title = "Project 1",
                    Description = "Description of Project 1",
                    Link = "https://example.com/project1"
                },
                new ProjectModel
                {
                    Title = "Project 2",
                    Description = "Description of Project 2",
                    Link = "https://example.com/project2"
                },
                new ProjectModel
                {
                    Title = "Project 3",
                    Description = "Description of Project 3",
                    Link = "https://example.com/project3"
                }
            };
            return View(projects);
        }
    }
}
