function hotelRoom(input) {

    let months = input[0];
    let nights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (months) {
        case 'May' || 'October':
            apartmentPrice = nights * 65;
            if (nights >= 14) {
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        case 'May' || 'October':
            studioPrice = nights * 50;
            if (nights >= 14) {
                studioPrice *= 0.70;
            } else if (nights > 7) {
                studioPrice *= 0.95
            }
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            break;
        case 'June' || 'September':
            apartmentPrice = nights * 68.70;
            if (nights > 14) {
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        case 'June' || 'September':
            studioPrice = nights * 75.20;
            if (nights > 14) {
                studioPrice *= 0.80;
            }
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            break;
        case 'July' && 'August':
            apartmentPrice = nights * 77;
            if (nights >= 14) {
                apartmentPrice *= 0.90;
            }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        case 'July' || 'August':
            studioPrice = nights * 76;
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            break;
    }
}
hotelRoom(["August", "20"])

// · За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// · За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// · За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// · За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.