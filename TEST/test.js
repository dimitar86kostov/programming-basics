function onTimeForTheExam
(params) {
    let examHour = Number(params[0]);
    let examMin = Number(params[1]);
    let arrivalHour = Number(params[2]);
    let arrivalMin = Number(params[3]);

    let totalExamTime = examHour * 60 + examMin;
    let totalArriveTime = arrivalHour * 60 + arrivalMin;

    let totalDiffTime = Math.abs(totalExamTime - totalArriveTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60

    if (totalExamTime === totalArriveTime) {
        console.log('On time');
    } else if (totalExamTime < totalArriveTime) {
        console.log('Late');


        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {

        if (totalDiffTime <= 30) {
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log(`Early`);

            if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`);
            } else {

                if (diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }

        }
    }
}



// if (arrivalM > examM) {
//     console.log('Late');
//     if (minsDiff < 60) {
//         console.log(`${minsDiff} minutes after the start`);
//     } else {
//         if (diffMoreThanHour < 10) {
//             console.log(`${hoursDiff}:0${minsDiff} hours after the start`);
//         } else {
//             console.log(`${hoursDiff}:${diffMoreThanHour} hours after the start`);
//         }
//     }

// } else if (arrivalM === examM || minsDiff <= 30) {
//     console.log('On time');
//     if (minsDiff <= 30) {
//         console.log(`${minsDiff} minutes before the start`);
//     }
// }

// else if (minsDiff >= 30) {
//     console.log("Early");

//     if (minsDiff < 60) {
//         console.log(`${minsDiff} minutes before the start`);
//     }
//     else {
//         if (diffMoreThanHour < 10) {
//             console.log(`${hoursDiff}:0${diffMoreThanHour} hours before the start`);
//         } else {
//             console.log(`${hoursDiff}:${diffMoreThanHour} hours before the start`);
//         }
//     }
// }

onTimeForTheExam(["11",
    "30",
    "10",
    "55"])














