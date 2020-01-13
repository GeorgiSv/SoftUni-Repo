//Exc 1  -----------------------------------------------------------------------------------------------
// function solveFuit(type, weigthOfGrams, price){
    
//     let kilograms = weigthOfGrams / 1000;
//     let finalPrice = kilograms * price;

//     console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
// }

// solveFuit('orange', 2500, 1.80);

//Exc 2 -----------------------------------------------------------------------------------------------
// function solveGCD(firstNumber, secondNumber){
//     while(secondNumber){
//        let temp = secondNumber;
//        secondNumber = firstNumber % secondNumber;
//        firstNumber = temp; 
//     }
//     return firstNumber;
// }

// console.log(solveGCD(15,5));


//Exc 3 -----------------------------------------------------------------------------------------------
function solveSameNumbers(givenNumber){
    let numbers = String(givenNumber).split("");
    let firstDigit = numbers[0];
    
    let isSameNumber = true;
    
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        if (element != firstDigit) {
            isSameNumber = false;
        }
    }

    let sum = numbers
    .map(Number)
    .reduce((acc, cur) => acc + cur);

    console.log(isSameNumber);
    console.log(sum);
}
solveSameNumbers(222);

//Exc 4 