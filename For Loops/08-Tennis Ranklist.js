function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let initialScore = Number(input[1]);

    let curScore = 0;
    let finalScore = 0;
    let reachedStage = '';
    let avarage = 0;
    let percent = 0;
    let win = 0;

    for (let i = 2; i < input.length; i++) {
        reachedStage = input[i];
        if (reachedStage === "W") {
            curScore += 2000;
            win++
        } else if (reachedStage === 'F') {
            curScore += 1200;
        } else if (reachedStage === "SF") {
            curScore += 720;
        }
    }
    
    finalScore = curScore + initialScore;
    avarage = curScore / tournaments;
    percent = (100 / tournaments) * win;

    console.log(`Final points: ${finalScore}`);
    console.log(`Average points: ${Math.floor(avarage)}`);
    console.log(`${percent.toFixed(2)}%`);
}
// W - ако е победител получава 2000 точки
// F - ако е финалист получава 1200 точки
// SF - ако е полуфиналист получава 720 точки

tennisRanklist(["5", "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
