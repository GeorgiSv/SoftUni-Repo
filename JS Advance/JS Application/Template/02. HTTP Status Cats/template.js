function showStatusCode(e) {

    let elForShow = document.getElementsByClassName('status')[0];
    
    if (e.textContent === 'Show status code') {
        e.parentNode.children[1].style.display = 'inline';
        e.textContent = 'Hide status code';
    } else{
        e.parentNode.children[1].style.display = 'none';
        e.textContent = 'Show status code';
    }
 }

(() => {
     renderCatTemplate();

     async function renderCatTemplate() {
       
            let source = await fetch('http://127.0.0.1:5500/02.%20HTTP%20Status%20Cats/catsimg.hbs')
            .then(res => res.text());

            let content = {cats : window.cats};
            let template = Handlebars.compile(source); // give this the content for view
            
            let container = document.getElementById('allCats');
            container.innerHTML = template(content);
     }
})();
