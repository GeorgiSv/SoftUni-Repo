function solve(){
  
   let articleSection = document.querySelector("main section");
   let createButton = document.getElementsByClassName("btn create")[0];
   let archiveSectionUl = document.querySelector(".archive-section ul");
   console.log(createButton);
   
   
   createButton.addEventListener("click", function(e){
      e.preventDefault();

      let authorInput = document.getElementById("creator");
      let titleInput = document.getElementById("title");
      let categoryInput = document.getElementById("category");
      let contentInput = document.getElementById("content");

      let newArticle = document.createElement("article");
      let h1Title = document.createElement("h1");
      h1Title.textContent = titleInput.value;
      newArticle.appendChild(h1Title);

      //making first paragraph
      let categoryP = document.createElement("p");
      categoryP.textContent = "Category:";

      let strongCategory = document.createElement("strong");
      strongCategory.textContent = categoryInput.value;

      categoryP.appendChild(strongCategory);
      newArticle.appendChild(categoryP);


      //secod p
      let creatorP = document.createElement("p");
      creatorP.textContent = "Creator:";

      let strongCreator = document.createElement("strong");
      strongCreator.textContent = authorInput.value;

      creatorP.appendChild(strongCreator);
      newArticle.appendChild(creatorP);

      //third p
      let contentP = document.createElement("p");
      contentP.textContent = contentInput.value;
      newArticle.appendChild(contentP);

      //Buttons creation
      let buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons";

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn delete";

      let archiveButton = document.createElement("button");
      archiveButton.textContent = "Archive";
      archiveButton.className = "btn archive"

      buttonsDiv.appendChild(deleteButton);
      buttonsDiv.appendChild(archiveButton);

      newArticle.appendChild(buttonsDiv);

      articleSection.appendChild(newArticle);

      archiveButton.addEventListener("click", function(e){

         let currentH1Title = e.target.parentNode.parentNode.children[0];
         let currentLi = document.createElement("li");
         currentLi.textContent = currentH1Title.textContent;

         e.target.parentNode.parentNode.parentNode.removeChild( e.target.parentNode.parentNode);
         archiveSectionUl.appendChild(currentLi);
      })

      deleteButton.addEventListener("click", function(e){
         e.target.parentNode.parentNode.parentNode.removeChild( e.target.parentNode.parentNode);
      })

   })

//    var paraArr = [].slice.call(para).sort(function (a, b) {
//       return a.textContent > b.textContent ? 1 : -1;
//   });
//   paraArr.forEach(function (p) {
//       div.appendChild(p);
//   });

  }
