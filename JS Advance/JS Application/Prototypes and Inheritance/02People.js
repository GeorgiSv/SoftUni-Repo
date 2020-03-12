function solve(){
    class Employee {
        constructor(name, age, tasks){
            if (new.target === Employee) {
                
            }
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }
        work(){
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }
        getSalary(){
            return this.salary;
        }  
        collectSalary(){
            console.log( `${this.name} received ${this.getSalary()} this month.`);
        }
    
    }
    
    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(" is working on a simple task.")
        }
    }
    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
    
            this.tasks.push(" is working on a complicated task.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }
    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            
            this.dividend = 0;
            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing a quarterly report.");
        }

        getSalary(){
            return this.salary + this.dividend;
        }   
    }
    return {Employee, Junior, Senior, Manager};
}

