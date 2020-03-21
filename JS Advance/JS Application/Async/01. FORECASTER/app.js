function attachEvents() {
    let locationInput = document.getElementById('location');
    let forecast = document.getElementById("forecast");
    let currentWeatherBlock = document.querySelector("#current");
    let upcomingWeatherBlock = document.querySelector("#upcoming");


    let divClass = document.createElement("div");
    let divClassTrio = document.createElement("div");
    divClass.className = "forecasts";
    divClassTrio.className = "forecast-info";

    function getWeather(){
        
        forecast.style.display = "block";
        
        fetch('https://judgetests.firebaseio.com/locations.json')
        .then((res) => res.json())
        .then((data) => {
            
            let isFound = data.find(x => x.name === locationInput.value)        
            if (isFound) {
                
                fetch(`https://judgetests.firebaseio.com/forecast/today/${isFound.code}.json`)
                .then((res) => res.json())
                .then((d) =>{

                    //{condition: "Rain", high: "8", low: "2"}
                    let {name, forecast} = d; 

                    divClass.innerHTML = "";

                    let currentHTML = generateHTML(name, forecast)
                    currentWeatherBlock.appendChild(currentHTML);
                })
                .catch(errorHandler);
                

                fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${isFound.code}.json`)
                .then((res) => res.json())
                .then((d) =>{
                    //{condition: "Rain", high: "8", low: "6"}
                    let {forecast,name} = d; 

                    divClassTrio.innerHTML = "";

                    forecast.forEach((obj) => {

                        let currentHTML = generateSmallerHTML(obj);
                        upcomingWeatherBlock.appendChild(currentHTML);
                    });
                })
                .catch(console.error());
            }
        })
        .catch(errorHandler);
    }
    
    function errorHandler(){
        forecast.innerText = `Error`;
    }

    function symbolChekcer(givenType){

        let result = "";
        switch (givenType) {
            case "Sunny":
                result = '☀'
                break;
            case "Partly sunny":
                result = '⛅'
                break;
            case "Overcast":
                result = '☁'
                break;
            case "Rain":
                result = '☂';
                break;
        }
        return result;
    }

    function generateHTML(name, forecast){

        let symbolSpan = document.createElement("span");
        let conditionSpan = document.createElement("span");
        let locationSpan = document.createElement("span");
        let degreeSpan = document.createElement("span");
        let weatherTypeSpan = document.createElement("span");

        symbolSpan.className = "condition symbol";
        conditionSpan.className = "condition";
        locationSpan.className = "forecast-data";
        degreeSpan.className = "forecast-data";
        weatherTypeSpan.className = "forecast-data";

        symbolSpan.textContent = symbolChekcer(forecast.condition);
        locationSpan.textContent = name;
        degreeSpan.textContent = forecast.low + '°' + `/` + forecast.high + '°';
        weatherTypeSpan.textContent = forecast.condition;

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(degreeSpan);
        conditionSpan.appendChild(weatherTypeSpan);

        divClass.appendChild(symbolSpan);
        divClass.appendChild(conditionSpan);
        return divClass;
    }

    function generateSmallerHTML(forecast){
        
        let upcomingSpan = document.createElement("span");
        let symbolSpan = document.createElement("span");
        let degreeSpan = document.createElement("span");
        let weatherTypeSpan = document.createElement("span");

        upcomingSpan.className = "upcoming";
        symbolSpan.className = "symbol";
        degreeSpan.className = "forecast-data";
        weatherTypeSpan.className = "forecast-data";

        symbolSpan.textContent = symbolChekcer(forecast.condition);
        degreeSpan.textContent = forecast.low  + '°' + `/` + forecast.high + '°';
        weatherTypeSpan.textContent = forecast.condition;

        upcomingSpan.appendChild(symbolSpan);
        upcomingSpan.appendChild(degreeSpan);
        upcomingSpan.appendChild(weatherTypeSpan);

        divClassTrio.appendChild(upcomingSpan);

        return divClassTrio;
    }
    return {
        getWeather,
    }
}

let result = attachEvents();