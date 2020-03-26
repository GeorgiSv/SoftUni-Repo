let tableContainer = document.getElementsByTagName('tbody')[0];

(function solve(){

    fetch(`https://softuni-base.firebaseio.com/students.json`)
    .then((res) => res.json())
    .then((data) => {

        Object.entries(data)
        .forEach(([key, info]) => {
    
            let {facilityNumber, firstName, grade, id, lastName} = info;
            
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<tr>
                <td>${id}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${facilityNumber}</td>
                <td>${grade}</td>
            </tr>`
    
            tableContainer.appendChild(newRow);
         })
    });
}())