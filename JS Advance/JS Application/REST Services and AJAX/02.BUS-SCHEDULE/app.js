function solve() {

    let infoBox = document.getElementsByClassName("info")[0];
    let departBtn = document.getElementById("depart");
    let arriveBtn = document.getElementById("arrive");

    let currentID = `depot`;
    let url = `https://judgetests.firebaseio.com/schedule/${currentID}.json`;
    let currnetName = "";

    function depart() {
        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            var {name, next} = data;
            currnetName = name;

            infoBox.textContent = "Next stop " + currnetName;
            currentID = next;
            url = `https://judgetests.firebaseio.com/schedule/${currentID}.json`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        })
        .catch((err) => {
            infoBox.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    function arrive() {

        infoBox.textContent = "Arriving at " + currnetName;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();