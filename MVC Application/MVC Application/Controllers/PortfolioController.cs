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
                    Title = "Sintang Kusinero ni Sinta",
                    Description = "Isang Komunidad ang Bumubuo sa Industriya ng Tingian",
                    Link = "https://pupcj.wordpress.com/2024/12/27/sintang-kusinero-ni-sinta/",
                    Image = "project1.png"
                },
                new ProjectModel
                {
                    Title = "Huling Hiling para sa Hustisya",
                    Description = "Isang Matandang Bilanggo ang Umaasa sa Kapatawaran at Hustisya",
                    Link = "https://drive.google.com/file/d/1EkFbaZ7mQr0P_NiML912b63BSQXup45p/view?usp=drive_link",
                    Image = "project2.png"
                },
                new ProjectModel
                {
                    Title = "Laban sa Impyernong Walang Hanggan",
                    Description = "Isang Pelikula ang Naglalantad sa Impyerno ng Hindi Pantay na Lipunan",
                    Link = "https://drive.google.com/file/d/14SYe_f-rKRxkLMz29vQIVP6qqO46zAZW/view?usp=drive_link",
                    Image = "project3.jpg"
                }
            };
            return View(projects);
        }
    }
}
