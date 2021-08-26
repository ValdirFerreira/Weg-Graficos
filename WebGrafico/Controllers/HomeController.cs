using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebGrafico.Models;

namespace WebGrafico.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("/Home/CarregaGrafico")]
        public JsonResult CarregaGrafico()
        {
            int[] valore = { 67, 11, 98, 33, 1, 34, 66, 12, 90, 99, 7, 12, 44 };

            var dados = new List<GraficoModel>();

            for (int i = 0; i < 8; i++)
            {
                dados.Add(new GraficoModel
                {
                    TituloRodape = string.Concat(" Coluna - ", i.ToString()),
                    Porcentagem = valore[i]
                });
            }

            return Json(new { dados = dados });

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Index1()
        {
            return View("Index1");
        }

        public IActionResult Index2()
        {
            return View("Index2");
        }

        public IActionResult Index3()
        {
            return View("Index3");
        }

        public IActionResult Index4()
        {
            return View("Index4");
        }



        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
