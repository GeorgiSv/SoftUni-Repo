function solve() {
  
    let addButton = document.getElementsByTagName("button")[1];
    let productLists = document.getElementsByTagName("ul")[0];

    addButton.addEventListener("click", function(e){
        e.preventDefault();

        let inputProductFields = document.getElementsByTagName("form")[0];
        let name = inputProductFields[0];
        let quantity = inputProductFields[1];
        let price = inputProductFields[2];

        
        let span = document.createElement("span");
        span.innerText = "name.innerText";

        let strongEl = document.createElement("strong");
        strongEl.innerText = `Avaiable ${quantity.innerText}`;
        
        let strongElSecond = document.createElement("strong");
        strongElSecond.innerText = price.innerText;
        let buttonEl = document.createElement("button");
        buttonEl.innerText = "Add to Client's List";

        let divEl = document.createElement("div");
        divEl.appendChild(strongElSecond);
        divEl.appendChild(buttonEl);

        let newLi = document.createElement("li");
        newLi.appendChild(span);
        newLi.appendChild(strongEl);
        newLi.appendChild(divEl);

        // let objectToAdd = `<li> 
        // <span>${name} </span>
        // <strong>Avaiable ${quantity}</strong>
        //     <div>
        //         <strong>${price}</strong>
        //         <button>Add to Client's List</button>
        //     </div>
        //  </li>`;

         productLists.appendChild(newLi)
    })


}