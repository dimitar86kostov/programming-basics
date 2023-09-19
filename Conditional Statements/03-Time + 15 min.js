function timePlus15Minutes(input) {

    let initialHours = Number(input[0]);
    let initialMinutes = Number(input[1]);

    let totalMinutes = initialHours * 60 + (initialMinutes + 15);
    
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60; 

    if (hours === 24) {
        hours = 0
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    }
    else {
        console.log(`${hours}:${minutes}`);
    }
}

timePlus15Minutes(["11", "08"])

// Да се напише функция,която получава час и минути от 24-часово денонощие и изчислява
// колко ще е часът след 15 минути.
// Резултатът да се отпечата във формат часове:минути.
// Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
// Часовете се изписват с една или две цифри.
// Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.