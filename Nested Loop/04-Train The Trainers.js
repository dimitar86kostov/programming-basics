function trainTheTrainers(input) {
    let i = 0;

    let judges = Number(input[i]);
    i++
    let presentation = input[i];
    let average = 0;
    let presentCounter = 0;

    while (presentation !== "Finish") {

        i++
        let curGrade = Number(input[i]);
        let sum = 0;
        let g = 0;

        while (g < judges) {
            sum += curGrade;
            average += curGrade;
            i++
            g++
            curGrade = Number(input[i])
        }
        sum /= judges;
        console.log(`${presentation} - ${sum.toFixed(2)}.`);

        presentation = input[i];
        presentCounter++
    }
    if (presentation === "Finish") {
        average /= (presentCounter * judges);
        console.log(`Student's final assessment is ${average.toFixed(2)}.`);
    }
}


trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])







