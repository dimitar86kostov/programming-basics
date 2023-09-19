function lunchBreak(input) {

    let moovieTitle = input[0];
    let episodDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunch = (1 / 8) * breakDuration;
    let chilling = (1 / 4) * breakDuration;

    let totalTakenTime = lunch + chilling;
    let timeLeft = breakDuration - totalTakenTime;

    if (timeLeft >= episodDuration) {
        let freeTime = timeLeft - episodDuration;
        console.log(`You have enough time to watch ${moovieTitle} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let timeNeeded = episodDuration - timeLeft;
        console.log(`You don't have enough time to watch ${moovieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

}
lunchBreak(["Teen Wolf", "48", "60"])

// 1. Име на сериал – текст
// 2. Продължителност на епизод – цяло число в диапазона 60
// 3. Продължителност на почивката – цяло число в диапазона 96
// По време на почивката отделяте време за обяд и време за отдих. 
// Времето за обяд ще бъде 1/8 от времето за почивка, 
// а времето за отдих ще бъде 1/4 от времето за почивка.
// 96 - 12 - 24 = 60
// почивка = 96
// филм = 60
// обяд  (12.5 /100) * 96 = 12
// отдих (25 / 100) * 96 = 24