function addItem() {
    let inputField = document.getElementById("newItemText");
    let inputValue = document.getElementById("newItemValue");
    let selectMenu = document.getElementById("menu");

    //create <option> element
    let optionsElement = document.createElement("option");
    optionsElement.value = inputValue.value;
    optionsElement.innerText = inputField.value;

    inputValue.value = "";
    inputField.value = "";
    
    selectMenu.appendChild(optionsElement);
}
