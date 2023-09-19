function cinema(input){

let projection = input[0];
let lines = Number(input[1]);
let columns = Number(input[2]);

let total = lines * columns;
let price = 0;

switch (projection) {
    case 'Premiere':
        price = total * 12.00;
        console.log(`${price.toFixed(2)}.leva`);
        break;
case "Normal":
    price = total * 7.50;
    console.log(`${price.toFixed(2)}.leva`);
break;
case 'Discount':
    price = total * 5.00;
    console.log(`${price.toFixed(2)}.leva`);
    break;
}

}
cinema(["Premiere", "10", "12"])

// · Premiere – премиерна прожекция, на цена 12.00 лева.
// · Normal – стандартна прожекция, на цена 7.50 лева.
// · Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.