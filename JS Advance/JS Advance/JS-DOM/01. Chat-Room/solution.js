function solve() {

   let button = document.getElementById("send");
   let pastMessages = document.getElementById("chat_messages");
   let currentInput = document.getElementById("chat_input");

   button.addEventListener("click", sendMessage);

   function sendMessage(){

      let newMessage = document.createElement("div");
      newMessage.className = "message my-message";

      newMessage.textContent = currentInput.value;
      
      pastMessages.appendChild(newMessage);

      document.getElementById("chat_input").value = "";
   }
}


