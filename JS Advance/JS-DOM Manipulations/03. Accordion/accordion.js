function toggle() {
    
    let button = document.getElementsByClassName("button")[0];
    let extraText = document.getElementById("extra");

    if (button.textContent == "More") {

        button.textContent = "Less";
        extraText.style.display = "block"
    }
    else {
        button.textContent = "More";
        extraText.style.display = "none";
    }
}
