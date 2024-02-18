function tickets(input, sortCriteria) {           // 100/100

    const output = [];

    while (input.length > 0) {
        let [destinationArr, priceArr, statusArr] = input.shift().split('|');

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status;
            }
        }

        const newTicket = new Ticket(destinationArr, priceArr, statusArr);
        output.push(newTicket);
    }

    //console.log(output);

    if (sortCriteria == 'destination') {
        output.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria == 'price') {
        output.sort((a, b) => a.price - b.price);
    } else if (sortCriteria == 'status') {
        output.sort((a, b) => a.status.localeCompare(b.status));
    }

    return output;                                                              // return a sorted summary of all tickets, sorted by sortCriteria
}


console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'));

console.log(`---`);

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
));

