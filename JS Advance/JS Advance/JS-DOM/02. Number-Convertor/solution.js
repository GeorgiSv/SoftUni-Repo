function solve() {

    var optionMenu = document.getElementById('selectMenuTo');
    addOptions();

     let button = document.getElementsByTagName("button")[0];
     let result = document.getElementById("result");
     let input = document.getElementById("input");

     button.addEventListener("click", convert);
   

     function convert(){
       
        let number = Number(input);
        let currentOption = optionMenu.value;
        let currentResult;
        
        if(currentOption === "binary"){

            currentResult = (Number(input.value)).toString(2);
        }
        else if(currentOption === "hexadeicmal"){

            currentResult = (Number(input.value)).toString(16).toUpperCase();
        }
        result.value = currentResult;
     }

     function addOptions (){

        let binaryAdd = document.createElement("option");
        binaryAdd.value = "binary";
        binaryAdd.textContent = "Binary";

        let hexadeicmalAdd = document.createElement("option");
        hexadeicmalAdd.value = "hexadeicmal";
        hexadeicmalAdd.textContent = "Hexadeicmal";

        optionMenu.appendChild(binaryAdd);
        optionMenu.appendChild(hexadeicmalAdd);

     }

}