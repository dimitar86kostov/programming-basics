function barcodeGenerator(params) {
    let firstNum = params[0];
    let secondNum = params[1];
    let barcode = '';

    for (let a = firstNum.charAt(0); a <= secondNum.charAt(0); a++) {
        for (let b = firstNum.charAt(1); b <= secondNum.charAt(1); b++) {
            for (let c = firstNum.charAt(2); c <= secondNum.charAt(2); c++) {
                for (let d = firstNum.charAt(3); d <= secondNum.charAt(3); d++) {
                    
                    if (Number(a) % 2 !== 0 && Number(b) % 2 !== 0 && Number(c) % 2 !== 0 && Number(d) % 2 !== 0) {
                        barcode += `${a}${b}${c}${d} `
                    }
                }
                
            }
            
        }
        
    }
    console.log(barcode);
}
barcodeGenerator(["2345",
    "6789"])
