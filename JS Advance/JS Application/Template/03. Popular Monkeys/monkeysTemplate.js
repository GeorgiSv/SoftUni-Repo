function showInfo(e){
    
    if (e.parentNode.children[3].style.display === "none") {
        e.parentNode.children[3].style.display = "inline";
    }
    else{
        e.parentNode.children[3].style.display = "none";
    }
}

(async function() {
  

    let resource = await fetch('http://127.0.0.1:5500/03.%20Popular%20Monkeys/template.hbs')
    .then(res => res.text());
    
    let template = Handlebars.compile(resource);
    let container = document.getElementsByClassName('monkeys')[0];

    let newEl = template({monkeys: window.monkeys});
    container.innerHTML = newEl;
})()