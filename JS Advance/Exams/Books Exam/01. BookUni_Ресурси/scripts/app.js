function solve() {
    let addButton = document.querySelector("form button");
    let inputs = Array.from(document.querySelectorAll("form input"));
    let newBookshelfSection = Array.from(document.getElementsByClassName("bookShelf"));
    let totalPriceElement = document.getElementsByTagName("h1")[1];

    let totalPrice = 0;

    addButton.addEventListener("click", function(e){
        e.preventDefault();

        let title = inputs[0].value;
        let year = Number(inputs[1].value);
        let price = Number(inputs[2].value);

        let newBook = document.createElement("div");
        newBook.className = "book";

        let bookTitleP = document.createElement("p");
        bookTitleP.textContent = `${title} [${year}]`;

        //IMPORTANT
        let buyButton = document.createElement("button");
        buyButton.textContent = `Buy it only for ${(price).toFixed(2)} BGN`;

        
        //ONLY FOR NEW BOOKS
        let moveToOldButton = document.createElement("button");
        moveToOldButton.textContent = "Move to old section";
     
        newBook.appendChild(bookTitleP);
        newBook.appendChild(buyButton);
        
        if (year >= 2000) {
            newBook.appendChild(moveToOldButton);
            newBookshelfSection[1].appendChild(newBook);
        }
        else{
            price -= price * 0.15;
            buyButton.textContent = `Buy it only for ${(price).toFixed(2)} BGN`;
            newBookshelfSection[0].appendChild(newBook);
        }


        buyButton.addEventListener("click", function(e){
            totalPrice += Number(e.target.textContent.split(" ")[4]);
            totalPriceElement.textContent = `Total Store Profit: ${(totalPrice.toFixed(2))} BGN`;

            e.target.parentNode.parentNode.removeChild( e.target.parentNode);
        })

        moveToOldButton.addEventListener("click", function(e){

            let currentBook = e.target.parentNode;

            let currentPRice = Number(e.target.previousSibling.textContent.split(" ")[4]);
            let newPrice = currentPRice - (currentPRice * 0.15);

            currentBook.removeChild(moveToOldButton);
            
            currentBook.children[1].textContent = `Buy it only for ${(newPrice).toFixed(2)} BGN`;
            newBookshelfSection[0].appendChild(currentBook);
        })
    })
}