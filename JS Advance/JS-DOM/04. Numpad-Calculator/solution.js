function solve() {

    let keys = document.getElementsByClassName("keys")[0];
    let output = document.getElementById("expressionOutput");
    let clearButton = document.getElementsByClassName("clear")[0];
    let resultField = document.getElementById("resultOutput");

    clearButton.addEventListener("click", () =>{

        output.innerHTML = "";
        resultField.innerText = "";

    })

    let operations = {
        "+": (num1,num2) => Number(num1) + Number(num2),
        "-": (num1,num2) => Number(num1) - Number(num2),
        "*": (num1,num2) => Number(num1) * Number(num2),
        "/": (num1,num2) => Number(num1) / Number(num2),
    }
    let operators = ["+","-","/","*"] ; 

    keys.addEventListener("click", (e) => {

        let element = e.target;
        let value = element.value;

        if(value === "="){

            let [num1, operator, num2] = output.innerHTML.split(" ");

            if(num2){
                resultField.innerText = operations[operator](num1, num2);
            }
            else{
                resultField.innerText = "NaN";
            }
            return;
        }

        if(operators.includes(value)){
            
            output.innerHTML += ` ${value} `;
            return;
        }
        
        output.innerHTML += value;
    });
}