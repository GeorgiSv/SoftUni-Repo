function attachEvents() {

    let  autohrInput = document.getElementById('author');
    let  contentInput = document.getElementById('content');
    let messagesContainer = document.getElementById('messages');


    function refreshBtnAction(){

        messagesContainer.textContent = "";
        
        fetch("https://rest-messanger.firebaseio.com/messanger.json")
        .then((res) => res.json())
        .then((data) =>{
            
            Object.entries(data)
            .forEach(([key, info]) =>{
                let {author, content} = info;
                messagesContainer.textContent += `${author}: ${content}\n`;
            })
         console.log(data);
        })
        .catch(handleError);
    }

    function sendBtnAction(){

        let author = autohrInput.value;
        let content = contentInput.value;
        
        let header =  {  
            method: 'POST',
            headers: {'Xontent-Type': 'application/json'},
            body: JSON.stringify({author, content})
    }
        fetch('https://rest-messanger.firebaseio.com/messanger.json', header)
        .then(() =>{
            autohrInput.value = "";
            contentInput.value = "";

            refreshBtnAction();
        })
        .catch(handleError);
    }

    function handleError(){
        console.log("Error is here");
        
    }
    return {
        refreshBtnAction,
        sendBtnAction
    }
}


let result = attachEvents();