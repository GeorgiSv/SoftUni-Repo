function attachEvents() {
    let ul = document.getElementById("phonebook");

    let personInput  = document.getElementById("person");
    let phoneInput = document.getElementById("phone");


    function loadElemenets (){
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
        .then((res) => res.json())
        .then((data) =>{
            Object.entries(data)
            .forEach(([elementID, phonebookData]) =>{
                const {person, phone} = phonebookData;

                let li = document.createElement("li");
                li.textContent = `${person}: ${phone}`;

                let deleteBtn = document.createElement("button");
                deleteBtn.setAttribute("data-target", elementID);
                deleteBtn.textContent = "Delete";

                deleteBtn.addEventListener("click", deleteElement);

                li.appendChild(deleteBtn);
                ul.appendChild(li);
            })
        })
        .catch(handleError);
    }
    function deleteElement (e){

        let bookID = this.getAttribute('data-target');
        
        const headers = {
            method: 'DELETE',
        }

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${bookID}.json`, headers)
         .then(() => {
            ul.innerHTML = "";
            loadElemenets();
         })
         .catch(handleError);
       
    }
    
    function createElement(){
        const person = personInput.value;
        const phone = phoneInput.value;

        const headers = {
            method: 'POST',
            headers: {'Xontent-Type': 'application/json'},
            body: JSON.stringify({person, phone})
        }

            fetch('https://phonebook-nakov.firebaseio.com/phonebook.json', headers)
                .then(()=>{
                    personInput.value = "";
                    phoneInput.value = "";
                    ul.innerHTML = "";
                    loadElemenets();
                })
                .catch(handleError);

        }

    function handleError(){
        console.log("Error is here");
        
    }

    return{
        loadElemenets,
        createElement
    }
}

let result = attachEvents();