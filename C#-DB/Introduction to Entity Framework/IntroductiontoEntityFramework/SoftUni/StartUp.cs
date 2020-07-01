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
            //Console.WriteLine(GetEmployeesFromResearchAndDevelopment(db));
            //Console.WriteLine(AddNewAddressToEmployee(db));
            //Console.WriteLine(GetEmployeesInPeriod(db));
            //Console.WriteLine(GetAddressesByTown(db));
            //Console.WriteLine(GetEmployee147(db));
            //Console.WriteLine(GetDepartmentsWithMoreThan5Employees(db));

            Console.WriteLine(GetLatestProjects(db));
        }

        //Problem 3
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

        //Problem 4
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

        //Problem 5 
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

        //Problem 6 
        public static string AddNewAddressToEmployee(SoftUniContext context)
        {
            var sb = new StringBuilder();

            Address address = new Address()
            {
                AddressText = "Vitoshka 15",
                TownId = 4
            };

            context.Addresses.Add(address);

            var nakov = context.Employees.
                First(e => e.LastName == "Nakov");

            nakov.Address = address;

            context.SaveChanges();

            var addressessText = context.Employees
                .OrderByDescending(e => e.AddressId)
                .Select(e => new
                {
                    e.Address.AddressText
                })
                .Take(10)
                .ToList();

            foreach (var addressText in addressessText)
            {
                sb.AppendLine(addressText.AddressText);
            }

            return sb.ToString().TrimEnd();
        }

        //Problem 7
        public static string GetEmployeesInPeriod(SoftUniContext context)
        {
            var sb = new StringBuilder();
            //(ep => ep.Project.StartDate.Year >= 2001 && ep.Project.StartDate.Year <= 2003))
            var employees = context.Employees
                .Where(e => e.EmployeesProjects.Any(ep => ep.Project.StartDate.Year >= 2001  && ep.Project.StartDate.Year <= 2003))
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    ManagerFirstName = e.Manager.FirstName,
                    ManagerLastName = e.Manager.LastName,
                    Projects = e.EmployeesProjects.Select(ep => new 
                    { 
                        ep.Project.Name,
                        ep.Project.StartDate,
                        ep.Project.EndDate
                    })
                })
                .Take(10)
                .ToList();

            foreach (var employ in employees)
            {
                sb.AppendLine($"{employ.FirstName} {employ.LastName} - Manager: {employ.ManagerFirstName} {employ.ManagerLastName}");

                foreach (var project  in employ.Projects)
                {

                    var startDate = project.StartDate.ToString("M/d/yyyy h:mm:ss tt");
                    var endDate = project.EndDate.HasValue ? project.EndDate.Value.ToString("M/d/yyyy h:mm:ss tt") : "not finished";
                    sb.AppendLine($"-- {project.Name} - {startDate} - {endDate}");
                }
            }
            return sb.ToString().TrimEnd();
        }

        //Problem 8
        public static string GetAddressesByTown(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var adresses = context.Addresses
                .OrderByDescending(a => a.Employees.Count)
                .ThenBy(a => a.Town.Name)
                .ThenBy(a => a.AddressText)
                .Select(a => new
                {
                    a.AddressText,
                    TownName = a.Town.Name,
                    EmployeeCount = a.Employees.Count
                })
                .Take(10)
                .ToList();

            foreach (var address in adresses)
            {
                sb.AppendLine($"{address.AddressText}, {address.TownName} - {address.EmployeeCount} employees");
            }

            return sb.ToString();
        }

        //Problem 9
        public static string GetEmployee147(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var employee = context.Employees
                .Where(e => e.EmployeeId == 147)
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    e.JobTitle,
                    Projects = e.EmployeesProjects.Select(p => new
                    {
                        ProjectName = p.Project.Name
                    })
                    .OrderBy(p => p.ProjectName)
                    .ToList()
                })
                .First();

            sb.AppendLine($"{employee.FirstName} {employee.LastName} - {employee.JobTitle}");
            sb.AppendLine($"{string.Join(Environment.NewLine, employee.Projects.Select(p => p.ProjectName).ToList())}");

            return sb.ToString().TrimEnd();
        }

        //Problem10
        public static string GetDepartmentsWithMoreThan5Employees(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var departments = context.Departments
                .Where(d => d.Employees.Count > 5)
                .OrderBy(d => d.Employees.Count)
                .ThenBy(d => d.Name)
                .Select(d => new
                {
                    d.Name,
                    ManagerName = d.Manager.FirstName + " " + d.Manager.LastName,
                    Employees = d.Employees
                    .OrderBy(e => e.FirstName)
                    .ThenBy(e => e.LastName)
                    .Select(e => new
                    {
                        e.FirstName,
                        e.LastName,
                        e.JobTitle
                    })
                })
                .ToList();

            foreach (var department in departments)
            {
                sb.AppendLine($"{department.Name} - {department.ManagerName}");

                foreach (var employee in department.Employees)
                {
                    sb.AppendLine($"{employee.FirstName} {employee.LastName} - {employee.JobTitle}");
                }
            }

            return sb.ToString().TrimEnd();
        }

        //Problem 11
        public static string GetLatestProjects(SoftUniContext context)
        {
            StringBuilder sb = new StringBuilder();

            var lastProjects = context.Projects;
                
            var projects = lastProjects.OrderBy(p => p.Name)
                //.Skip(Math.Max(0, lastProjects.Count() - 10))
                .Select(p => new
                {
                    p.Name,
                    p.Description,
                    p.StartDate
                })
                .ToList();

            foreach (var project in projects)
            {
                sb.AppendLine($"{project.Name}");
                sb.AppendLine($"{project.Description}");
                sb.AppendLine($"{project.StartDate.ToString("M/d/yyyy h:mm:ss tt")}");
            }

            return sb.ToString().TrimEnd();
        }
    }
}
