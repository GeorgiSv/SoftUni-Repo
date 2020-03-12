function getInfo() {
    
   // let button = document.getElementById('submit');
    let input = document.getElementById('stopId');
    let bussesContainer = document.getElementById('buses');
    let stopName = document.getElementById("stopName")
;
    let stopID = input.value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    stopName.textContent = "";
    bussesContainer.innerHTML = "";
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        const {name, buses}= data;
        console.log(name);
        
        Object.entries(buses)
        .forEach(([busID, busTime]) =>{
            stopName.textContent = name;
            let li = document.createElement('li');
            li.textContent = `Bus ${busID} arrives in ${busTime}`;

            bussesContainer.appendChild(li);
        })
        
    })
      .catch((error) =>{
        stopName.textContent = "Error";
    })
}