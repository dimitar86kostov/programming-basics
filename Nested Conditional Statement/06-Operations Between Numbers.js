function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    

if (operator === '+') {
    result = N1 + N2;
    if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    }else{
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }


}else if (operator === '-') {
    result = N1 - N2;
    if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    }else{
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }

}else if (operator === '*') {
    result = N1 * N2;
    if (result % 2 === 0) {
        console.log(`${N1} ${operator} ${N2} = ${result} - even`);
    }else{
        console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
    }


}else if (operator === '/') {
    if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
    }else{
        result = N1 / N2;
        console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }


}else if (operator === '%') {
    if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
    }else{
    result = N1 % N2;
    console.log(`${N1} % ${N2} = ${result}`);
}
}
}


operationsBetweenNumbers(["10", "3", "%"])
// При събиране, изваждане и умножение на конзолата трябва да се отпечатат резултата 
// и дали той е четен или нечетен. При обикновеното деление – резултата. 
// При модулното деление – остатъка. Трябва да се има предвид, че делителят може да е 
// равен на 0(нула), а на нула не се дели. 
// В този случай трябва да се отпечата специално съобщениe.

// Ако операцията е събиране, изваждане или умножение:
// {N1} {оператор} {N2} = {резултат} – {even/odd}"