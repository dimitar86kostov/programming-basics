function gameOfIntervals(input) {

    let numberMoves = Number(input[0]);
    let firstRange = 0;
    let secondRange = 0;
    let thirdRange = 0;
    let forthRange = 0;
    let fiveRange = 0;
    let sixRange = 0;
    let result = 0;
    let firstRangeCount = 0;
    let secondRangeCount = 0;
    let thirdRangeCount = 0;
    let forthRangeCount = 0;
    let fiveRangeCount = 0;
    let sixRangeCount = 0;

    for (let i = 1; i <= numberMoves; i++) {
        let number = Number(input[i]);

        if (number <= 9 && number >= 0) {
            number *= 0.20
            firstRange += number
            result += number
            firstRangeCount++
        } else if (number >= 10 && number <= 19) {
            number *= 0.30
            secondRange += number
            result += number
            secondRangeCount++
        } else if (number >= 20 && number <= 29) {
            number *= 0.40
            thirdRange += number
            result += number
            thirdRangeCount++
        } else if (number >= 30 && number <= 39) {
            number = 50
            forthRange += number
            result += number
            forthRangeCount++
        } else if (number >= 40 && number <= 50) {
            number = 100
            fiveRange += number
            result += number
            fiveRangeCount++
        } else {
            result = result / 2;
            sixRange += number
            sixRangeCount++
        }
    }
    let percentFirstR = (firstRangeCount / numberMoves) * 100;
    let percentSecondR = (secondRangeCount / numberMoves) * 100;
    let percentThirdR = (thirdRangeCount / numberMoves) * 100;
    let percentForthR = (forthRangeCount / numberMoves) * 100;
    let percentFiveR = (fiveRangeCount / numberMoves) * 100;
    let percentSixR = (sixRangeCount / numberMoves) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${percentFirstR.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentSecondR.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentThirdR.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentForthR.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentFiveR.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentSixR.toFixed(2)}%`);
}
gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20',])