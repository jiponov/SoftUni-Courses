function solve(input) {

    let index = 0;
    let command = input[index];
    index++;

    let isFinished = false;
    let totalTicketsAllMovies = 0;

    let studentTicketsOverall = 0;
    let standardTicketsOverall = 0;
    let kidsTicketsOverall = 0;

    while (command != 'Finish') {
        isFinished = false;
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;

        let tempTicket = 0;

        let typeTicket = input[index];
        index++;

        while (typeTicket != 'End') {
            totalTicketsAllMovies++;
            tempTicket++;

            if (typeTicket == 'student') {
                studentTicketsOverall++;
            } else if (typeTicket == 'standard') {
                standardTicketsOverall++;
            } else if (typeTicket == 'kid') {
                kidsTicketsOverall++;
            }

            if (tempTicket >= freeSeats) {
                break;
            }

            typeTicket = input[index];
            index++;

        }
        let hallTotalSpace = tempTicket / freeSeats * 100;
        console.log(`${movieName} - ${hallTotalSpace.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let finalStudentTickets = studentTicketsOverall / totalTicketsAllMovies * 100;
    let finalStandardTickets = standardTicketsOverall / totalTicketsAllMovies * 100;
    let finalKidsTickets = kidsTicketsOverall / totalTicketsAllMovies * 100;

    if (!isFinished) {
        console.log(`Total tickets: ${totalTicketsAllMovies}`);
        console.log(`${finalStudentTickets.toFixed(2)}% student tickets.`);
        console.log(`${finalStandardTickets.toFixed(2)}% standard tickets.`);
        console.log(`${finalKidsTickets.toFixed(2)}% kids tickets.`);
    }
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);


