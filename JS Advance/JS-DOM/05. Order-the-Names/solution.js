function solve() {
    let button = document.getElementsByTagName("button")[0];
    let inputField = document.getElementsByTagName("input")[0];

    let list = document.getElementsByTagName("ol")[0];
    let liElements = list.getElementsByTagName("li");

    button.addEventListener("click", function() {

        let inputText = inputField.value;

        if (inputText) {
            
            let readyInput = "";
            readyInput += inputText[0].toUpperCase();

            for (let i = 1; i < inputText.length; i++) {
                readyInput += inputText[i].toLowerCase();
            }

            let index = readyInput.charCodeAt(0) - 65;

            if(liElements[index].textContent.length === 0){

                liElements[index].textContent += readyInput;
            }
            else{
                liElements[index].textContent += `, ${readyInput}`;
            }

            inputField.value = "";
        }
    })
}