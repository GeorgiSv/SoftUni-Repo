class Company{

  constructor(){
    this.departments  = [];
  }

  addEmployee(username, salary, position, department){

    if((!username) || (!position)  || (!department)){
        throw new Error("Invalid input!");
    }

    if(salary < 0 || salary === null || salary === "" || salary === undefined){
      throw new Error("Invalid input!");
    }

    let foundDepartment = this.departments.find(x => x.name === department);

    if(!foundDepartment){
      foundDepartment = {
        name: department,
        employees: [],
        avarageSallary: function(){
          return this.employees.reduce((prev, current) => prev + current.salary, 0 ) / this.employees.length
        }
      }
      this.departments.push(foundDepartment);
    }
    
    foundDepartment.employees.push({username, salary, position});
    
    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment(){

    let [best] = [...this.departments]
    .sort((a, b) => {
      return b.avarageSallary() - a.avarageSallary()
    });

    let result = `Best Department is: ${best.name}\n`;
    result += `Average salary: ${(best.avarageSallary()).toFixed(2)}\n`;
    result += [...best.employees]
    .sort((a, b) => b.salary-a.salary || a.username.localeCompare(b.username))
    .map(e => `${e.username} ${(e.salary)} ${e.position}`)
    .join(`\n`)
    .trim();
    
    return result;
  }
}