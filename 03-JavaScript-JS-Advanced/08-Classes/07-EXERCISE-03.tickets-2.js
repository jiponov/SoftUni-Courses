function tickets(input, sortCriteria) {           // 100/100

    const output = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    input.map((x) => {
        let [destination, price, status] = x.split('|');
        price = Number(price);

        let newTicket = new Ticket(destination, price, status);
        output.push(newTicket);
    });

    output.sort((a, b) => {
        if (typeof a[sortCriteria] == 'number') {
            return a[sortCriteria] - b[sortCriteria];
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    });

    return output;
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

