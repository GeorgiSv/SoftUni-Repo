class Library{
  constructor(libraryName){
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: this.libraryName.length,
      special: this.libraryName.length * 2,
      vip: Number.MAX_SAFE_INTEGER
    };
  }

  subscribe(name, type){
    if(!this.subscriptionTypes[type]){
      throw new Error(`The type ${type} is invalid`)
    }

    let foundSubscriber = this.subscribers.find(x => x.name === name);

    if(!foundSubscriber){
      this.subscribers.push({
            name,
            type,
            books: [],
      });
    }
    else{
      foundSubscriber.type = type;
    }
    
    return foundSubscriber 
    ? foundSubscriber
    : this.subscribers[this.subscribers.length -1];
  }

  unsubscribe(name){
    let foundSubscriber = this.subscribers.find(x => x.name === name);

    if(!foundSubscriber){
     throw new Error(`There is no such subscriber as ${name}`)
    }
    else{
      let index = this.subscribers.indexOf(foundSubscriber);
      this.subscribers.splice(index, 1);
    }

    return this.subscribers;
  }

  receiveBook(subscriberName, bookTitle, bookAuthor){
    const foundSubscriber = this.subscribers.find(x => x.name === subscriberName);

    if (!foundSubscriber) {
        throw new Error(`There is no such subscriber as ${subscriberName}`);
    }

    if (foundSubscriber.books.length >= this.subscriptionTypes[foundSubscriber.type]) {

        throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[foundSubscriber.type]}!`)

    }
    
    foundSubscriber.books.push({title: bookTitle, author: bookAuthor});

     return foundSubscriber;
  }

  showInfo (){
      if (!this.subscribers.length) {
          throw new Error(`${this.name} has no information about any subscribers`);
      }

    return this.subscribers
    .map(s => {
        const booksOutput = s.books.map(b => `${b.title} by ${b.author}`)
        .join(", ");

        return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`;
    })
    .join("\n");
  }
}


//arrange
let lib = new Library('S');

//act
lib.subscribe('Alex', 'normal')
lib.subscribe('Jerry', 'special')

lib.receiveBook('Jerry', 'The Black Tulip', 'Alexandre Dumas');
lib.receiveBook('Alex', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('Jerry', 'The Wolf Leader', 'Alexandre Dumas');

console.log(lib.showInfo());