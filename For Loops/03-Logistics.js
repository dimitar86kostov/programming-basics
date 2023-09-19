    function logistics(input) {

        let cargoCount = Number(input[0]);
        let totalWeight = 0;
        let busWeight = 0;
        let truckWeight = 0;
        let trainWeight = 0;
        let bus = 0;
        let truck = 0;
        let train = 0;

        for (let i = 1; i <= cargoCount; i++) {
            let curCargo = Number(input[i]);

            if (curCargo <= 3) {
                bus += 200;
                totalWeight += curCargo
                busWeight += curCargo
            } else if (curCargo <= 11) {
                truck += 175;
                totalWeight += curCargo
                truckWeight += curCargo
            } else {
                train += 120;
                totalWeight += curCargo
                trainWeight += curCargo
            }
        }
        let average = (busWeight * 200 + truckWeight * 175 + trainWeight * 120) / totalWeight;
        let percentBus = (busWeight / totalWeight) * 100;
        let percentTruck = (truckWeight / totalWeight) * 100;
        let percentTrain = (trainWeight / totalWeight) * 100;
        console.log(average.toFixed(2));
        console.log(`${percentBus.toFixed(2)}%`);
        console.log(`${percentTruck.toFixed(2)}%`);
        console.log(`${percentTrain.toFixed(2)}%`);
    }
logistics(['4', '1', '5', '16', '3'])