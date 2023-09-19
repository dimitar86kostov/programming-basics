function easterTrip
    (params) {

    let destination = params[0];
    let dates = params[1];
    let nights = Number(params[2]);

    let sum = 0;

    switch (destination) {
        case 'France':
            if (dates === "21-23") {
                sum += 30;
            }else if (dates === "24-27") {
                sum += 35;
            }else{
                sum += 40;
            }
            break;

        case 'Italy':
            if (dates === "21-23") {
                sum += 28;
            }else if (dates === "24-27") {
                sum += 32;
            }else{
                sum += 39;
            }
            break;

        case 'Germany':
            if (dates === "21-23") {
                sum += 32;
            }else if (dates === "24-27") {
                sum += 37;
            }else{
                sum += 43;
            }
            break;
    }
let total = nights * sum;

    console.log(`Easter trip to ${destination} : ${total.toFixed(2)} leva.`);

}
easterTrip(['Germany', '24-27', '5'])