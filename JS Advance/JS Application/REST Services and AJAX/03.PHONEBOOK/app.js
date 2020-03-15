function attachEvents() {
    let ul = document.getElementById("phonebook");
    let loadButton = document.getElementById("btnLoad");
    let createBitton = document.getElementById("btnCreate");
    let inputs  = document.getElementsByTagName("input");

    //let urlDelete = `https://phonebook-nakov.firebaseio.com/phonebook/${}.json`;
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    fetch(url)
    .then((response) => response.json())
    .then(data =>{
        loadButton.addEventListener("click", function(){
            ul.innerHTML = "";
            for (let key in data) {
                newLi.textContent = `${key.person}:${key.phone}`;
                 
            }
            
        });

        createBitton.addEventListener("click", function(){
            
            let newLi = document.createElement("li");
            newLi.textContent = `${inputs[0].value}:${inputs[1].value}`;
            let newDeleteBtn = document.createElement("button");
            newDeleteBtn.textContent = "Delete";
            newLi.appendChild(newDeleteBtn);

            ul.appendChild(newLi);

            inputs[0].value = "";
            inputs[1].value = "";
            data.push({person: inputs[0],phone: inputs[1]})
        })

    })


}

attachEvents();