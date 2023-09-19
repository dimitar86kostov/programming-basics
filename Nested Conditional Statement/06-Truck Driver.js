function truckDriver(input) {
    let season = input[0];
    let km = Number(input[1]);

    let price = 0;

    switch (season) {
        case "Spring":
            if (km <= 5000) {
                price = km * 0.75;
            }else if (km <= 10000) {
                price = km * 0.95;
            }else if (km <= 20000) {
                price = km * 1.45;
            }
            break;
    
        case "Summer":
            if (km <= 5000) {
                price = km * 0.90;
            }else if (km <= 10000) {
                price = km * 1.10;
            }else if (km <= 20000) {
                price = km * 1.45;
            }
            break;

        case "Autumn":
            if (km <= 5000) {
                price = km * 0.75;
            }else if (km <= 10000) {
                price = km * 0.95;
            }else if (km <= 20000) {
                price = km * 1.45;
            }
        break;

        case 'Winter':
            if (km <= 5000) {
                price = km * 1.05;
            }else if (km <= 10000) {
                price = km * 1.25;
            }else if (km <= 20000) {
                price = km * 1.45;
            }
        break;
    }
    let finalSum = (price * 4) * 0.90;
    console.log(finalSum.toFixed(2));
}
truckDriver(['Summer', '3455'])
