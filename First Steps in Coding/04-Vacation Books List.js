function vacationBooksList(input){

let numberBookList = Number(input[0]);
let listPerHour = Number(input[1]);
let numberDaysNeeded = Number(input[2]);

let hours = (numberBookList / listPerHour) / numberDaysNeeded
console.log(hours);
}

vacationBooksList(["432","15","4"])

// 1. Брой страници в текущата книга – цяло число в интервала [1…1000]

// 2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]

// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]