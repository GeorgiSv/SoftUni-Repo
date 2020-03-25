export const mainURL = "https://gsg-base-softuni.firebaseio.com/"; 

export const getAllBooks = () =>{
    return fetch(mainURL + `books.json`)
    .then((x) => x.json());
}

export const getBook = (bookId) =>{
    return fetch(mainURL +`books/${bookId}.json`)
    .then((x) => x.json());
}

export const createNewBook = (bookBody) =>{
    return fetch(mainURL +`books.json`, {
        method: 'POST',
        body: JSON.stringify(bookBody)
    })
    .then(x=> x.json());
}

export const updateBook = (bookBody, bookId) =>{
    return fetch(mainURL +`books/${bookId}.json`, {
        method: 'PUT',
        body: JSON.stringify(bookBody)
    })
    .then(x => x.json());
}
export const deleteBook = (bookId) =>{
    return fetch(mainURL +`books/${bookId}.json`, {
        method: 'DELETE',
    })
    .then(x=> x.json());
}

// // The following REST services will be created automatically to access your data:
// // •	List All Books
// // o	Endpoint:  https://[:projectId].firebaseio.com/books.json
// // o	Method: GET
// // o	Returns (JSON)
// //Create a New Book
// // o	Endpoint: https://[:projectId].firebaseio.com/books.json
// // o	Method: POST
// // o	Request body (JSON): {"title":"…", "author":"…", "isbn":"…"}
// // •	Update a Book
// // o	Endpoint:  https://[:project-id].firebaseio.com/books/[:bookId].json
// // o	Method: PUT
// // o	Request body (JSON): {"title":"…", "author":"…", "isbn":"…"}
