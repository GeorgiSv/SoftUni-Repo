function solveGivenDelimeter(array){
    let elementForSplit = array[array.length -1];
    array.length = array.length -1;

    console.log(array.join(elementForSplit));
}

// let test = ['One','Two','Three','Four','Five','-'];
// solveGivenDelimeter(test);

function solvePrintEveryNthNumber(array){
    let NElement = Number(array.pop());

    for (let index = 0; index < array.length; index += NElement) {
        console.log(array[index]);
    }
}

// let test = ['5','20','31','4','20','2'];
// solvePrintEveryNthNumber(test);

function solveAddandRemoveElements(array){

    let result = [1,];

    for (let index = 1; index <= array.length; index++) {
        const element = array[index];

        if(element == 'add'){
            result.push(index+1);
        }
        else if(element == 'remove'){
            result.pop();
        }
    }
   
    if (result.length == 0) {
        console.log('Empty');
        return;
    }

   for (let index = 0; index < result.length; index++) {

       const element = result[index];
       console.log(element);
   }
}

// let test = ['add','add','remove','add','add'];
// solveAddandRemoveElements(test);

function solveRotateArray(array){

    let lastElement = Number(array.pop());

    for (let index = 0; index < lastElement; index++) {
       
        let finalElement = array.pop();
        array.unshift(finalElement);
    }
    console.log(array.join(' '));
}

let test = ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
;
solveRotateArray(test);