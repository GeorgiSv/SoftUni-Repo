function solve() {
  
    let addButton = document.getElementsByTagName("button")[1];
    let productLists = document.getElementsByTagName("ul")[0];
    let filterButton = document.querySelector(".filter button");
    let totalPrice = document.getElementsByTagName("h1")[1];
    let myProductsElement = document.getElementById("myProducts");
    let buyButton = myProductsElement.getElementsByTagName("button")[0];
    let myProductsList = myProductsElement.getElementsByTagName("ul")[0];
    let productSection = document.getElementById("products");
    let addListBtn = document.querySelector(".filter ")
    let pricee = 0.0;

    addButton.addEventListener("click", function(e){
        e.preventDefault();
        createElement();
    })


    filterButton.addEventListener("click", function(){
        let filterBy = document.getElementById("filter");
        let allProducts = Array.from(document.getElementsByTagName("span"));

        for (const element of allProducts) {
            if (!element.textContent.includes(filterBy.value)) {
                element.parentElement.style.display = "none";
            }
            else{
                element.parentElement.style.display = "block";
            }
        }
    })
    

    buyButton.addEventListener("click", function(e){
        e.preventDefault();

        pricee = 0.0;
        totalPrice.textContent = `Total Price: ${(pricee).toFixed(2)}`;

        let elementsForRemove = Array.from(myProductsList.children);
        elementsForRemove.map( e => {

            myProductsList.removeChild(e)
        });
    })

    function createElement(){
        let [name, quantity, price] = Array.from(document.querySelectorAll("#add-new input"));
       

        let nameSpan = document.createElement("span");
        nameSpan.textContent = name.value;

        let avaiableElement = document.createElement("strong");
        avaiableElement.textContent = `Avaiable ${Number(quantity.value).toFixed()}`;
        
        let priceStrongElement = document.createElement("strong");
        priceStrongElement.textContent = price.value;

        let addToCardButton = document.createElement("button");
        addToCardButton.textContent = "Add to Client's List";

        let divLiElement = document.createElement("div");
        divLiElement.appendChild(priceStrongElement);
        divLiElement.appendChild(addToCardButton);

        let newLi = document.createElement("li");
        newLi.appendChild(nameSpan);
        newLi.appendChild(avaiableElement);
        newLi.appendChild(divLiElement);

        productLists.appendChild(newLi)

        addToCardButton.addEventListener("click", function(e){

            let myProductLi = document.createElement("li");
            myProductLi.textContent = e.target.parentNode.previousSibling.previousSibling.textContent;

            let priceElement = document.createElement("strong");
            priceElement.textContent = e.target.previousSibling.textContent;

            let avaiableElement = e.target.parentNode.previousSibling;
             
            let currentQuantity = Number(avaiableElement.textContent.split(" ")[1]) - 1;
            avaiableElement.textContent =`Avaiable ${currentQuantity}`;

            if(currentQuantity === 0){
                avaiableElement.parentNode.parentNode.parentNode.removeChild(avaiableElement.parentNode.parentNode);
            }

            myProductLi.appendChild(priceElement);
            myProductsList.appendChild(myProductLi);

            pricee += Number(e.target.previousSibling.textContent);
            totalPrice.textContent = `Total Price: ${(pricee).toFixed(2)}`;
    })

    }
}        


