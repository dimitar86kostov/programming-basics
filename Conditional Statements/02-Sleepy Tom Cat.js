function sleepyTomCat(input) {

    let dayOff = Number(input[0]);

    let busyDaysPlay = (365 - dayOff) * 63;
    let restingDaysPlay = dayOff * 127;
    let norm = 30000;

    let totalMinutesPlay = busyDaysPlay + restingDaysPlay;
    let differenceNorm = Math.abs(norm - totalMinutesPlay);

    let hours = Math.floor(differenceNorm / 60);
    let minutes = differenceNorm % 60;

    if (totalMinutesPlay > norm) {
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
sleepyTomCat(["20"])

// нормата за игра на Том е 30 000  минути в година.
// Времето за игра на Том зависи от почивните дни на стопанина му:
// •	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
// •	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
// Напишете програма, която въвежда броя почивни дни и отпечатва дали Том може да се наспи добре
// и колко е разликата от нормата за текущата година, като приемем че годината има 365 дни.

// rabotni dni 345 * 63 = 21 735
// pochivni dni 20 * 127 = 2 540
// total 21735 + 2540 = 24 275
// razlika ot normata = 30000 - 24 275 = 5725