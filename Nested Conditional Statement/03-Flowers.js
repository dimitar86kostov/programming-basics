    function flowers(input) {
        let chrysanthemumsQuant = Number(input[0]);
        let rosesQuant = Number(input[1]);
        let tulipsQuant = Number(input[2]);
        let season = input[3];
        let day = input[4];

        let sum = 0;
        switch (season) {
            case 'Spring':

                sum = chrysanthemumsQuant * 2 + rosesQuant * 4.10 + tulipsQuant * 2.50;
                if (day === 'Y') {
                    sum *= 1.15;
                }

                if (tulipsQuant > 7) {
                    sum *= 0.95
                }
                if (chrysanthemumsQuant + rosesQuant + tulipsQuant > 20) {
                    sum *= 0.80
                }
                break;

            case 'Summer':

                sum = chrysanthemumsQuant * 2 + rosesQuant * 4.10 + tulipsQuant * 2.50;
                if (day === 'Y') {
                    sum *= 1.15;
                }

                if (tulipsQuant > 7) {
                    sum *= 0.95
                }
                if (chrysanthemumsQuant + rosesQuant + tulipsQuant > 20) {
                    sum *= 0.80
                }
                break;

            case 'Autumn':

                sum = chrysanthemumsQuant * 3.75 + rosesQuant * 4.50 + tulipsQuant * 4.15;
                if (day === 'Y') {
                    sum *= 1.15;
                }

                
                if (chrysanthemumsQuant + rosesQuant + tulipsQuant > 20) {
                    sum *= 0.80
                }
                break;

            case 'Winter':

                sum = chrysanthemumsQuant * 3.75 + rosesQuant * 4.50 + tulipsQuant * 4.15;
                if (day === 'Y') {
                    sum *= 1.15;
                }
                if (rosesQuant >= 10) {
                    sum *= 0.90;
                }
                if (chrysanthemumsQuant + rosesQuant + tulipsQuant > 20) {
                    sum *= 0.80
                }
                break;
        }
        let finalSum = sum + 2;
        console.log(finalSum.toFixed(2));
    }
flowers(['10', '10', '10', 'Autumn', 'N'])
// В празнични дни цените на всички цветя се увеличават с 15%. Предлагат се следните отстъпки:
// •	За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
// •	За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
// •	За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.
