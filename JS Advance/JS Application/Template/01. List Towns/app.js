(function(){

    let button = document.getElementById('btnLoadTowns');
    let container = document.getElementById('root');

    button.addEventListener("click", async function(){
        
        let towns = document.getElementById('towns').value.split(', ');
        let source = await fetch('http://127.0.0.1:5500/01.%20List%20Towns/towns.hbs')
        .then((data) => data.text());

        let content = {towns};
        let template = Handlebars.compile(source);
        
        container.innerHTML = template(content);
    })
}());