//Exc 3

// function solveFuit(type, weigthOfGrams, price){
    
//     let kilograms = weigthOfGrams / 1000;
//     let finalPrice = kilograms * price;

//     console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
// }

// solveFuit('orange', 2500, 1.80);

//Exc 2 

function solveGCD(firstNumber, secondNumber){
    while(secondNumber){
       let temp = secondNumber;
       secondNumber = firstNumber % secondNumber;
       firstNumber = temp; 
    }
    return firstNumber;
}

console.log(solveGCD(15,5));