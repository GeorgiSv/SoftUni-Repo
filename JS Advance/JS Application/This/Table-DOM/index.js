function solve(){

   let table = document.getElementsByTagName("tbody")[0];

   table.addEventListener("click", function (e) {

       let currentColor = e.target.parentElement.style.background;

       if (!(currentColor === "")) {
           e.target.parentElement.style.background = "";
       }
       else{
           e.target.parentElement.style.background = "#413f5e";
       }
      // "#413f5e"
   })
}