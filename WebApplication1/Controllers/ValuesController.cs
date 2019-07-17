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
        List<Models.Task> tasks;

        public ValuesController(Context context)
        {
            if (tasks.Count == null)
            {
                tasks = new List<Models.Task>
                {
                    new Models.Task { Id = "0", Flag = true, Text = "Aoaoaoao" }
                };
                db = context;
            }

           
        }

        [HttpGet]
       [Route("get")]
        public ActionResult<IEnumerable<Models.Task>> Get(string id, string flag, string text)
        {
            Boolean _flag;


            if (flag == "true")
                _flag = true;
            else
                _flag = false;

            var newTask = new Models.Task { Id = id, Flag = _flag, Text = text };
            tasks.Add(newTask);
            db.Tasks.AddRange(newTask);
            //db.SaveChanges();
            
            //return RedirectToAction("Index");
            return tasks;
        }

       /* [HttpPost]
        public ActionResult<IEnumerable<Models.Task>> Post([FromBody] string id, string flag, string text)
        {
            Boolean _flag;


            if (flag == "true")
                _flag = true;
            else
                _flag = false;

            //_flag = flag == "true";

            var newTask = new Models.Task { Id = id, Flag = _flag, Text = text };

            tasks.Add(newTask);

            return tasks;
        }*/

        [HttpGet]
        [Route("gettasks")]
        public  ActionResult<IEnumerable<Models.Task>> Gettasks()
        {
            var output = db.Tasks.ToList();
            //return await db.Tasks.ToListAsync();
            // return output;//return ;
            return tasks;
        }
    }
}

/*
 * // GET: api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            //return "value";
            return id.ToString();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

*/