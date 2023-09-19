function grades(input) {

    let students = Number(input[0]);
    let studentsTop = 0;
    let studentsBetween4And5 = 0;
    let studentsBetween3And4 = 0;
    let studentsFail = 0;
    let average = 0;
    let totalRaiting = 0;
    let topTotal = 0;
    let from4To5Total = 0;
    let from3To4Total = 0;
    let failTotal = 0;

    for (let i = 1; i <= students; i++) {
        let raiting = Number(input[i]);
        if (raiting < 3.00) {
            studentsFail++
            totalRaiting += raiting
            failTotal += raiting

        } else if (raiting < 3.99) {
            studentsBetween3And4++
            totalRaiting += raiting
            from3To4Total += raiting
            
        } else if (raiting < 4.99) {
            studentsBetween4And5++
            totalRaiting += raiting
            from4To5Total += raiting
        } else {
            studentsTop++
            totalRaiting += raiting
            topTotal += raiting
        }
    }
let percentOver5 = (studentsTop / students ) * 100;
let percentOver4 = (studentsBetween4And5 / students ) * 100;
let percentOver3 = (studentsBetween3And4 / students ) * 100;
let percentFail = (studentsFail / students ) * 100;

average = totalRaiting / (studentsFail + studentsBetween3And4 + studentsBetween4And5 + studentsTop) 

console.log(`Top students: ${percentOver5.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${percentOver4.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${percentOver3.toFixed(2)}%`);
console.log(`Fail: ${percentFail.toFixed(2)}%`);
console.log(`Average: ${average.toFixed(2)}`);
}
grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5'])