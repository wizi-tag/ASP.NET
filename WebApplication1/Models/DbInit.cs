using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class DbInit
    {
        public static void Init(Context context)
        {
            context.Database.EnsureCreated();

            if (context.Tasks.Any())
            {
                return;
            }

            var tasks = new Task[]
            {
            };

            foreach (Task t in tasks)
            {
                context.Tasks.Add(t);
            }
            context.SaveChanges();
        }
    }
}
