function solve() {

    var optionMenu = document.getElementById('selectMenuTo');
    addOptions();

     let button = document.getElementsByTagName("button")[0];
     let result = document.getElementById("result");
     let input = document.getElementById("input").value;

     button.addEventListener("click", convert);
   

     function convert(){
       
        let number = Number(input);
        let currentOption = optionMenu.value;
        let currentResult;

        if (number < 0) {
            number = 0xFFFFFFFF + n + 1;
           } 

        if(currentOption == "binary"){

            currentResult = parseInt(number, 10).toString(2);
        }
        else if(currentOption == "hexadeicmal"){

            currentResult = parseInt(number, 10).toString(16);
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