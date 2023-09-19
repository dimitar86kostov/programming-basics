function fualTank(input){

let fuelType = input[0];
let litters = Number(input[1]);

if (litters >= 25){
    console.log(`You have enough ${fuelType}.`);
}else if(litters < 25){
    console.log(`Fill your tank with ${fuelType}!`);
}else{
    console.log(`Invalid Fuel!`);
}

}

fualTank(['Kerosene','200'])