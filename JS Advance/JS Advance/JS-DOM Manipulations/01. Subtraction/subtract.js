function subtract() {
   
    let resultElement = document.getElementById("result");
    let furstValue = document.getElementById("firstNumber");
    let secondValue = document.getElementById("secondNumber");
   resultElement.textContent = Number(furstValue.value) - Number(secondValue.value);
}
