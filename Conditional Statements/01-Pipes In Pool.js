    function pipesInPool(input) {

        let volume = Number(input[0]);
        let P1DebitPerHour = Number(input[1])
        let P2DebitPerHour = Number(input[2]);
        let hoursWorkerGone = Number(input[3]);

        let P1Litters = P1DebitPerHour * hoursWorkerGone;
        let P2Litters = P2DebitPerHour * hoursWorkerGone;
        let debitSum = P1Litters + P2Litters;

        let P1Percent = (P1Litters * 100) / debitSum
        let P2Percent =  (P2Litters * 100) / debitSum
        let debitProcent = (debitSum * 100) / volume
        
        if (debitSum < volume){
        
            console.log(`The pool is ${debitProcent}% full. Pipe 1: ${P1Percent.toFixed(2)}%. Pipe 2: ${P2Percent.toFixed(2)}%.`);
        }else{
            let overFlow = debitSum - volume;
            console.log(`For ${hoursWorkerGone} hours the pool overflows with ${overFlow} liters.`)
        }
    }
pipesInPool(["1000", "100", "120", "3"])


// •	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
// •	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
// •	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
// •	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
// Басейн с обем V има две тръби от които се пълни. 
// Всяка тръба има определен дебит(литрите вода минаващи през една тръба за един час). 
// Работникът пуска тръбите едновременно и излиза за N часа. 
// Напишете програма, която изкарва състоянието на басейна, в момента, когато работникът се върне.

//     P1 + P2 * H = 660
// 1000 - 660 = 340

