using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using Newtonsoft.Json;
using System.Web;
using Microsoft.EntityFrameworkCore;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ValuesController : ControllerBase
    {

        private Context db;

        public ValuesController(Context context)
        {
            db = context;
        }

        [HttpGet]
        [Route("getlist")]
        public ActionResult<IEnumerable<Models.Task>> Getlist()
        {
            return db.Tasks.ToList();
        }

        [HttpGet]
        [Route("set")]
        public ActionResult Set(int id, string flag, string text)
        {
            Boolean _flag = flag == "true";
            db.Tasks.Add(new Models.Task() { Id = id, Flag = _flag, Text = text });
            db.SaveChanges();

            return RedirectToAction("Getlist");
        }

        [HttpGet]
        [Route("fchange")]
        public ActionResult Fchange(int id)
        {
            var list = db.Tasks.ToList();

            foreach (var i in list)
            {
                if (i.Id == id)
                {
                    i.Flag = !i.Flag;
                    db.Entry(i).State = EntityState.Modified;
                    break;
                }
            }
            db.SaveChanges();

            return RedirectToAction("Getlist");
        }

        [HttpGet]
        [Route("tchange")]
        public ActionResult Tchange(int id, string text)
        {
            var list = db.Tasks.ToList();

            foreach (var i in list)
            {
                if (i.Id == id)
                {
                    i.Text = text;
                    db.Entry(i).State = EntityState.Modified;
                    break;
                }
            }

            db.SaveChanges();

            return RedirectToAction("Getlist");
        }

        [HttpGet]
        [Route("delete")]
        public ActionResult Delete(int id)
        {
            var list = db.Tasks.ToList();

            foreach (var i in list)
            {
                if (i.Id == id)
                {
                    db.Tasks.Remove(i);
                    break;
                }
            }
            db.SaveChanges();

            return RedirectToAction("Getlist");
        }
    }
}
