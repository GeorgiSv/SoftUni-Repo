function solveGivenDelimeter(array){
    let elementForSplit = array[array.length -1];
    array.length = array.length -1;

    console.log(array.join(elementForSplit));
}

let test = ['One','Two','Three','Four','Five','-'];
solveGivenDelimeter(test);