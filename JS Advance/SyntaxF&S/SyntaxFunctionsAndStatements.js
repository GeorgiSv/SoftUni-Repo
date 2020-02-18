//Exc 1  -----------------------------------------------------------------------------------------------
function solveFuit(type, weigthOfGrams, price){
    
    let kilograms = weigthOfGrams / 1000;
    let finalPrice = kilograms * price;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`);
}

// solveFuit('orange', 2500, 1.80);

//Exc 2 -----------------------------------------------------------------------------------------------
function solveGCD(firstNumber, secondNumber){
    while(secondNumber){
       let temp = secondNumber;
       secondNumber = firstNumber % secondNumber;
       firstNumber = temp; 
    }
    return firstNumber;
}

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

//Exc 4 -----------------------------------------------------------------------------------------------

function solveTimeToWalk(...params){
    let stpesCount = params[0];
    let footLength = params[1];
    let speed = params[2] / 1000;

    let lengthToSchool = footLength * stpesCount;
    let breaks = 0;

    let lengthToSchoolForUse = lengthToSchool
    while(true){

        lengthToSchoolForUse = lengthToSchoolForUse - 500;
        if(lengthToSchoolForUse <= 0){
            break;
        } 
        breaks = breaks +1;
    }

    
    let time = speed * lengthToSchool / 60;
    
    console.log(time);
}
//solveTimeToWalk(4000, 0.60, 5);

//Exc 6

function solveRoadRadar(array){
    let currentSpeed = Number(array[0]);
    let area = array[1];
    let result = "";

    switch (area) {
        case "motorway":
                if (currentSpeed > 130 && currentSpeed <= 150) {
                    result = "speeding";
                }
                else if (currentSpeed > 130 && currentSpeed <= 170) {
                    result = "excessive speeding";
                }
                else if (currentSpeed >  170) {
                    result = "reckless driving";
                }
            break;
        case "interstate":
                if (currentSpeed > 90 && currentSpeed <= 110) {
                    result = "speeding";
                }
                else if (currentSpeed > 90 && currentSpeed <= 130) {
                    result = "excessive speeding";
                }
                else if (currentSpeed > 130) {
                    result = "reckless driving";
                }
            break;
        case "city":
                if (currentSpeed > 50 && currentSpeed <= 70) {
                    result = "speeding";
                }
                else if (currentSpeed > 50 && currentSpeed <= 90) {
                    result = "excessive speeding";
                }
                else if (currentSpeed >  90) {
                    result = "reckless driving";
                }
            break;
        case "residential":
                if (currentSpeed > 20 && currentSpeed <= 40) {
                    result = "speeding";
                }
                else if (currentSpeed > 20 && currentSpeed <= 60) {
                    result = "excessive speeding";
                }
                else if (currentSpeed >  60) {
                    result = "reckless driving";
                }
            break;
    }

    return result;
}

let test = [21, 'residential'];
//console.log(solveRoadRadar(test));