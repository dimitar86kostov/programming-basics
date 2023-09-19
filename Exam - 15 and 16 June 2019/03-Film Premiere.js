function filmPremiere(input) {
    let bill = 0
    let film = input[0];
    let package = input[1];
    let tickets = Number(input[2]);

    if (film == "John Wick") {
        if (package == "Drink") {
            bill = 12 * tickets;
        }else if(package == 'Popcorn'){
            bill = 15 * tickets;
        }else{
            bill = 19 * tickets;
        }
    }
if(film == "Star Wars") {
    if (package == "Drink") {
        bill = 18 * tickets;
    }else if(package == 'Popcorn'){
        bill = 25 * tickets;
    }else if(package == 'Menu'){
        bill = 30 * tickets;
}if(tickets >= 4){
    bill = 0.70 * bill;
}
}
if(film == "Jumanji") {
    if (package == "Drink") {
        bill = 9 * tickets;
    }else if(package == 'Popcorn'){
        bill = 11 * tickets;
    }else{
        bill = 14 * tickets;
    }
}if(tickets == 2){
    bill = 0.85 * bill;
}
console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
"Menu",
"2"])


//         John Wick	    Star Wars	     Jumanji
// Напитка	12 лв./бр.	   18 лв. /бр.	        9 лв. /бр.
// Пуканки	15 лв. /бр.  	25 лв. /бр.	        11 лв. /бр.
// Меню	    19 лв. /бр. 	30 лв. /бр.	         14 лв. /бр.
// Напишете програма, която изчислява цената, която трябва да се заплати,
// като имате в предвид следните отстъпки:
// •	При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка.
// •	При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама.

// •	Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
// •	Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
// •	Трети ред - брой билети - цяло число в интервала [1… 30]
