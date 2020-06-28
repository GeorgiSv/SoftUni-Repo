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

            //Console.WriteLine(GetEmployeesFullInformation(db));
            //Console.WriteLine(GetEmployeesWithSalaryOver50000(db));
            Console.WriteLine(GetEmployeesFromResearchAndDevelopment(db));
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

        //Problem 2
        public static string GetEmployeesWithSalaryOver50000(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employees = context.Employees
                .Where(e => e.Salary > 50000)
                .OrderBy(e => e.FirstName)
                .Select(e => new
                {
                    e.FirstName,
                    e.Salary
                })
                .ToList();

            foreach (var employ in employees)
            {
                sb.AppendLine($"{employ.FirstName} - {employ.Salary:F2}");
            }

            return sb.ToString().TrimEnd();
        }

        //Problem 3 
        public static string GetEmployeesFromResearchAndDevelopment(SoftUniContext context)
        {
            var sb = new StringBuilder();

            var employees = context.Employees
                .Where(e => e.Department.Name == "Research and Development")
                .OrderBy(e => e.Salary)
                .ThenByDescending(e => e.FirstName)
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    DepartmentName = e.Department.Name,
                    e.Salary

                })
                .ToList();


            foreach (var employ in employees)
            {
                sb.AppendLine($"{employ.FirstName} {employ.LastName} from {employ.DepartmentName} - ${employ.Salary:f2}");
            }

            return sb.ToString().TrimEnd();
        }
    }
}
