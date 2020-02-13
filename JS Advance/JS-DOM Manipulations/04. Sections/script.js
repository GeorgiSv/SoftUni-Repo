function create(words) {

   let content = document.getElementById("content");

   for (let word of words) {
       let div = document.createElement("div");
       let newParagraph = document.createElement("p");

       newParagraph.textContent = word;
       newParagraph.style.display = "none";
       
       div.appendChild(newParagraph);
       div.addEventListener("click", () => {
           newParagraph.style.display = "inline-block";
       });
       content.appendChild(div);
   }
}
