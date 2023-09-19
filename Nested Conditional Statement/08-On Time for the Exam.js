function onTimeTorTheExam(input) {

    let initialExamHour = Number(input[0]);
    let initialExamMiutes = Number(input[1]);
    let initialArrivalHour = Number(input[2]);
    let initialArrivalMinutes = Number(input[3]);

    let examMinutes = initialExamHour * 60 + initialExamMiutes;
    let arrivalMinutes = initialArrivalHour * 60 + initialArrivalMinutes;

    if (examMinutes < arrivalMinutes) {
        console.log('Late');

        let difference = arrivalMinutes - examMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        if (hours > 0) {
            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            console.log(`${difference} minutes after the start`);
        }

    } else if (examMinutes === arrivalMinutes || examMinutes - arrivalMinutes <= 30) {
        console.log('On Time');

        let difference = examMinutes - arrivalMinutes;


        if (difference > 0) {
            console.log(`${difference} minutes before the start`);

        }

    } else if (examMinutes - arrivalMinutes > 30) {
        console.log('Early');

        let difference = examMinutes - arrivalMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = (difference % 60);
        
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`);
        }else if (hours > 0) {
            console.log(`${hours}:${minutes} hours before the start`);
        }
    } else {
        console.log(`${difference} minutes before the start`);


    }
}

onTimeTorTheExam(["11", "30", "10", "55"])