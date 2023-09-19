function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let countFishermans = Number(input[2]);

  price = 0;
  switch (season) {
    case 'Spring':
      price = 3000;
      break;
    case 'Summer':
    case 'Autumn':
      price = 4200;
      break;
    case 'Winter':
      price = 2600;
      break;
  }

  if (countFishermans <= 6) {
    price *= 0.90;
  } else if (countFishermans <= 11) {
    price *= 0.85;
  }else{
    price *= 0.75;
  }

  if (countFishermans % 2 === 0 && season !== 'Autumn') {
    price *= 0.95;
  }

  if (budget >=  price) {
    let leftMoney = budget - price; 
    console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
  }else{
    let lackMoney = price - budget;
    console.log(`Not enough money! You need ${lackMoney.toFixed(2)} leva.`);
  }
  

}
fishingBoat(["2000", "Winter", "13"])
// ·Цената за наем на кораба през пролетта е 3000 лв.
// ·Цената за наем на кораба през лятото и есента е 4200 лв.
// ·Цената за наем на кораба през зимата е 2600 лв.В зависимост от броя си групата ползва отстъпка:
// ·Ако групата е до 6 човека включително – отстъпка от 10%.
// ·Ако групата е от 7 до 11 човека включително – отстъпка от 15%.
// ·Ако групата е от 12 нагоре – отстъпка от 25%.
