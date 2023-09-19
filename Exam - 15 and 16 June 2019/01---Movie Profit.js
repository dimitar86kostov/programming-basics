function movieProfit(input) {

    let movieTitle = input[0];
    let days = input[1];
    let ticketsQuant = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let sum = days * ticketPrice * ticketsQuant;
    let cinemaGets = sum * cinemaPercent / 100;

    let total = sum - cinemaGets;

    console.log(`The profit from the movie ${movieTitle} is ${total.toFixed(2)} lv.`);

}
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])


// 1.	Име на филм - текст
// 2.	Брой дни - цяло число в диапазона [1… 90]
// 3.	Брой билети  - цяло число в диапазона [100… 100000]
// 4.	Цена на билет - реално число в диапазона [5.0… 25.0]
// 5.	Процент за киното - цяло число в диапазона [5... 35]
