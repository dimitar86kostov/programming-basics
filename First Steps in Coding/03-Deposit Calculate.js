function depositCalculate (input){

let depositSum = Number(input[0]);
let periodMonth = Number(input[1]);
let annualInterest = Number(input[2]);
let annualInterestDecimal = annualInterest / 100

let finalSum = depositSum + periodMonth * ((depositSum * annualInterestDecimal) /12)

console.log(finalSum);
}

depositCalculate(["200","3","5.7"])

// 1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

// 2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

// 3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]

// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)