function solve(worker){
    if(!worker.hasOwnProperty("dizziness")){
      return worker;
    }
  
    if(worker.dizziness){
      let kilos = Number(worker.weight);
      let experienceYear = Number(worker.experience);
      worker.levelOfHydrated += 0.1 * kilos * experienceYear;
      worker.dizziness = false;
    }
  
   return worker;
  }
  