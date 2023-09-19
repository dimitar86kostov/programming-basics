function sumPrimeNonPrime(input) {
    let i = 0;

    let command = input[i];
    i++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log("Number is negative.");
            command = input[i];
            i++;
            continue;
        }
        let isPrime = true;

        for (let a = 2; a < curNum; a++) {
            if (curNum % a === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += curNum;
        } else {
            nonPrimeSum += curNum;
        }
        command = input[i];
        i++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
