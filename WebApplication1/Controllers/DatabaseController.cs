using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class DatabaseController : Controller
    {
        private Context db;

        public DatabaseController (Context context)
        {
            db = context;
        }


        public async Task<IActionResult> Index()
        {
            return View(await db.Tasks.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create(Models.Task task)
        {

            db.Tasks.Add(task);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}