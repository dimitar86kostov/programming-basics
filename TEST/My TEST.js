function countsDevisible9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;

    for (let i = start; i <= end; i++) {

        if (i % 9 === 0) {
            sum = sum + i;

        }
    }
    console.log(`The sum: ${sum}`);
    let output = 0;

    for (let a = start; a <= end; a++) {

        if (a % 9 === 0) {
            output = + `${a} `
            console.log(output);
        }
    }
    
}
countsDevisible9(["100", "200"])