using SoftUni.Data;
using System;
using System.Linq;
using System.Text;
using SoftUni.Models;

namespace SoftUni
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var db = new SoftUniContext();

            Console.WriteLine(GetEmployeesFullInformation(db));

        }

        //Problem 1
        public static string GetEmployeesFullInformation(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employees = context.Employees
                    .OrderBy(e => e.EmployeeId)
                    .Select(e => new
                    {
                        FullName = e.FirstName + " " + e.LastName + " " + e.MiddleName,
                        e.JobTitle,
                        e.Salary
                    })
                    .ToList();

            foreach (var employ in employees)
            {
                sb.AppendLine(string.Join(" ", employ.FullName, employ.JobTitle, $"{employ.Salary:F2}"));
            }

            return sb.ToString();
        }
    }
}
