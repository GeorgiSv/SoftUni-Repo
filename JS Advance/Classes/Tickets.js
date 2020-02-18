class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

function ticketingSys(array, sortingBy){
    
    let tickets = [];

    for (let line of array) {
        let [city, price, status] = line.split("|");
        price = Number(price);

        let newTicket = new Ticket(city, price, status);
        tickets.push(newTicket);
    }

    return tickets.sort((a,b) => {
            if (typeof a[sortingBy] === 'string') {
                return a[sortingBy].localeCompare(b[sortingBy]);
            }
            else{
                return a[sortingBy] - (b[sortingBy]);
            }
    })
}

let inputArrayTest =['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'];
let destination = 'price';

console.log(ticketingSys(inputArrayTest, destination));

