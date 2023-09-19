function examPreparation(input) {

    let i = 1;
    let task = input[i];
    let grade = 0;
    let badGrades = Number(input[0]);
    let badGradesCount = 0;
    let excluded = false;
    let count = 0;
    let total = 0;
    let lastProblem = '';

    while (task !== "Enough") {
        lastProblem = task;
        i++
        grade = Number(input[i]);
        if (grade <= 4) {
            badGradesCount++;
            count++;
            total+=grade;
            i++;
            task = input[i];
            if (badGradesCount === badGrades) {
                excluded = true;
                break;
            }
        } else {
            count++;
            total+=grade;
            i++;
            task = input[i];
        }
    }
if (excluded === false) {
    let average = total / count;
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${lastProblem}`);
    
}else{
console.log(`You need a break, ${badGradesCount} poor grades.`);
}

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])



