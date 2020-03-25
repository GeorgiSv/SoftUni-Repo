import {mainURL, getAllBooks, createNewBook, updateBook, getBook, deleteBook} from './firebase-requests.js';

let inputs = document.querySelectorAll('form input');
let submitButton = document.querySelector('form button');
let loadButton = document.getElementById("loadBooks");
let table  = document.getElementsByTagName('tbody')[0];

function extractInput(){
    let currentInputValues = [];
    inputs.forEach(x =>{
        currentInputValues.push(x.value);
    })
    return {
        title: currentInputValues[0],
        author: currentInputValues[1],
        isbn: currentInputValues[2]
    };
}

function booksToFrom(author, isbn, title){
    inputs[0].value = title;
    inputs[1].value = author;
    inputs[2].value = isbn;
}

function listAllBooks(){

    table.innerHTML = '';
    getAllBooks().then((data) => {

        Object.entries(data)
        .forEach(([key, info]) => {

            let {title, isbn, author} = info;

            let row = document.createElement('tr');
            row.setAttribute('data-id', key);
            row.innerHTML = `<td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>`;

             table.appendChild(row);
        })
    });
}

(function solve(){

    listAllBooks();

    submitButton.addEventListener("click", function(e){
        e.preventDefault();

        //Creat the JSON info in the database
        let body = extractInput();
        createNewBook(body);

        //clean the fields
        inputs.forEach(x =>{
            x.value = '';
        })

        listAllBooks();
    });

    loadButton.addEventListener("click", function(){
        listAllBooks();
    });


    table.addEventListener("click", function(e){
        
        let currentRow = e.target.parentNode.parentNode;
        let id = currentRow.getAttribute("data-id");

        if (e.target.innerText === "Delete") {

            deleteBook(id);
            listAllBooks();
        }
        else if(e.target.innerText === "Edit"){

            // getBook(id).then((data) =>{
            //    let {author, isbn, title} = data;
            //    booksToFrom(author, isbn, title);
            // })

            // submitButton.addEventListener("click", function(e){
            //     let newInputs = extractInput();
            //     updateBook(newInputs, id);
            // });
        }
        else{
            return;
        }
        
    });


}());



