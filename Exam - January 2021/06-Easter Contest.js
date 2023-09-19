function easterContest(params) {
    let i = 0;

    let quantCoz = Number(params[i]);
    i++;
    let name = params[i];
    let totalPoints = 0;
    i++;
    let curGrade = Number(params[i]);
    let curRow = '';
    let curGradeStr = '';
    let maxNum = Number.MIN_SAFE_INTEGER;
    let holder = 0;

    for (let row = i; i < params.length; row++) {
        
        while (curRow !== 'Stop') {
            curGrade = Number(params[i]);
            totalPoints += curGrade
            i++;
            curGradeStr = params[i];
            if (curGradeStr === 'Stop') {
                break;
            } else {
                curGrade = Number(curGradeStr);
                totalPoints += curGrade;
                i++;
                curRow = params[i];
            }
        }
        console.log(`${name} has ${totalPoints} points.`);
        if (totalPoints > maxNum) {
            maxNum = totalPoints;
            holder = name;
            console.log(`${name} is the new number 1!`);
        }
        i++;
        name = params[i];
        curRow = '';
        i++;
        totalPoints = 0;

    }
        console.log(`${holder} won competition with ${maxNum} points!`);
    

}
easterContest(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
