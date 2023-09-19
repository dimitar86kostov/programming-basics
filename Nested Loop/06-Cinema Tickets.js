function cinemaTickets(input) {
    i = 0;

    let movieTitle = input[i];
    let totalTickets = 0;
    let curStudent = 0;
    let curStandart = 0;
    let curKids = 0;
    let studentTotal = 0;
    let standartTotal = 0;
    let kidsTotal = 0;
    let percentFullnes = 0;

    while (movieTitle !== "Finish") {
        i++
        let freeSeats = Number(input[i]);
        i++;
        let typeTicket = input[i];
        curStudent = 0;
        curStandart = 0;
        curKids = 0;
        let counter = freeSeats;
        percentFullnes = 0;

        while (typeTicket !== "End") {

            if (counter < 1) {               
                percentFullnes = 100 * ((curStudent + curStandart + curKids) / freeSeats);
                console.log(`${movieTitle} - ${percentFullnes.toFixed(2)}% full.`);
                break;
            } else {
                if (typeTicket === "student") {
                    curStudent++;
                    totalTickets++;
                    studentTotal++
                    counter--;
                } else if (typeTicket === "standard") {
                    curStandart++;
                    standartTotal++
                    totalTickets++;
                    counter--;
                } else if (typeTicket === "kid") {
                    curKids++;
                    kidsTotal++
                    totalTickets++;
                    counter--;
                }

                i++
                typeTicket = input[i];
            }
        }

        if (typeTicket === "End") {
            percentFullnes = 100 * ((curStudent + curStandart + curKids) / freeSeats);
            console.log(`${movieTitle} - ${percentFullnes.toFixed(2)}% full.`);
            i++;
            movieTitle = input[i];
        }else{
            
            movieTitle = typeTicket;
        }
    }
    if (movieTitle === "Finish") {
        let percStudent = (studentTotal / totalTickets) * 100;
        let percStandard = (standartTotal / totalTickets) * 100;
        let percKid = (kidsTotal / totalTickets) * 100;
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${percStudent.toFixed(2)}% student tickets.`);
        console.log(`${percStandard.toFixed(2)}% standard tickets.`);
        console.log(`${percKid.toFixed(2)}% kids tickets.`);
    }
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

