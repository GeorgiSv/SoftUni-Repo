function attachEvents() {
    let catchedDivs = document.getElementById('catches');
    let inputs = document.querySelectorAll('#addForm input');
    let fieldsetContainer = document.getElementsByTagName('fieldset')[0];

    fieldsetContainer.addEventListener("click", (e) =>{
        
        let catchId = e.target.parentNode.getAttribute("data-id");
        let options = {};

        if(e.target.className === "delete"){

         options = {
              headers: {'Xontent-Type': 'application/json'}, 
              method: 'DELETE',
           }

           fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, options)
           .then(console.log("Updating has finished"))
           .catch(errorHandler);
   
        }
        else if(e.target.className === "update"){

            let newValues = e.target.parentNode.getElementsByTagName("input");

            let angler = newValues[0].value;
            let weight = newValues[1].value;
            let species = newValues[2].value;
            let location = newValues[3].value;
            let bait = newValues[4].value;
            let captureTime = newValues[5].value;
            
            options = {
              headers: {'Xontent-Type': 'application/json'},
              method: 'PUT',
              body: JSON.stringify({"angler":`${angler}`, "weight":`${weight}`, "species":`${species}`, "location":`${location}`, "bait":`${bait}`, "captureTime":`${captureTime}`})
             }

             fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, options)
             .then(console.log("Updating has finished"))
             .catch(errorHandler);
        }
        else{
            return;
        }
        
        listElements();

    });

    async function listElements(){

        catchedDivs.innerHTML = "";

        try {
            let response = await fetch(`https://fisher-game.firebaseio.com/catches.json`);
            let data = await response.json();
    
            Object.entries(data)
            .forEach(value =>{
    
                let key = value[0];
                let obj = value[1];
                let {angler, weight, species, location, bait, captureTime} = obj;
    
               generateHTMLCatch(key, angler, weight, species, location, bait, captureTime);
            })
        } catch (error) {
            errorHandler(error);
        }
    }

    async function addElement(){

        let angler = inputs[0].value;
        let weight = inputs[1].value;
        let species = inputs[2].value;
        let location = inputs[3].value;
        let bait = inputs[4].value;
        let captureTime = inputs[5].value;

        try {
            
            let options = {
                method: 'POST',
                headers: {'Xontent-Type': 'application/json'},
                body: JSON.stringify({"angler":`${angler}`, "weight":`${weight}`, "species":`${species}`, "location":`${location}`, "bait":`${bait}`, "captureTime":`${captureTime}`})
            }

            let response = await fetch(`https://fisher-game.firebaseio.com/catches.json`, options);

            cleanFields(inputs);
            listElements();
            
        } catch (error){
            errorHandler(error);
        }
    }

    function generateHTMLCatch(key, angler, weight, species, location, bait, captureTime){

        let div = document.createElement("div");
        div.setAttribute("data-id", `${key}`);
        div.className = "catch";

        div.innerHTML = 
        ` <label>Angler</label>
                <input type="text" class="angler" value="${angler}">
                <hr>
                <label>Weight</label>      
                <input type="number" class="weight" value="${weight}">
                <hr>
                <label>Species</label>
                <input type="text" class="species" value="${species}">
                <hr>
                <label>Location</label>
                <input type="text" class="location" value="${location}">
                <hr>
                <label>Bait</label>
                <input type="text" class="bait" value="${bait}">
                <hr>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${captureTime}">
                <hr>
                <button class="update">Update</button>
                <button class="delete">Delete</button>`;

        catchedDivs.appendChild(div);
    }

    function errorHandler(){
        console.error(`Error`);
    }

    function cleanFields(array){

        for (let inputField of array) {
            inputField.value ="";
        }
    }

    return {
        listElements,
        addElement
    }
}

let result = attachEvents();














//https://fisher-game.firebaseio.com/catches.json
