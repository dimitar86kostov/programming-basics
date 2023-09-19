function cinema(input) {

    let capacity = Number(input[0]);
    let totalClients = Number();
    let ticketPrice = 5;
    let totalSum = 0;
    let bookedSeats = 0;


    for (let i = 1; i < input.length; i++) {
        let curString = input[i];
        if (curString === "Movie time!") {
            let leftSeats = capacity - bookedSeats;
            console.log(`There are ${leftSeats} seats left in the cinema.`);
            break;
        }
        let curClients = Number(input[i]);
        if (capacity < curClients) {
            console.log(`The cinema is full.`);
            break;
        }
        totalSum += curClients * ticketPrice;
        totalClients += curClients;
        capacity -= curClients;
        if (curClients % 3 === 0) {
            totalSum -= 5;
        }
    }
    
    console.log(`Cinema income - ${totalSum} lv.`);
}
cinema(['60', '10', '6', '3', '20', '15', 'Movie Time!'])