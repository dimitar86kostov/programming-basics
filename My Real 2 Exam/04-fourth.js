function giftsFromSanta(params) {

    let N = Number(params[0]);
    let M = Number(params[1]);
    let S = Number(params[2]);

    let adress = '';

    for (let i = M; i >= N; i--) {

        if (i % 2 === 0 && i % 3 === 0) {
            if (i === S) {
                break;
            }
            adress += `${i} `
            
        }

    }
    console.log(adress);
}
giftsFromSanta(["1",
"36",
"12"])

