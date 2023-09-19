let start = 3256; // начало на обхвата
let end = 6579; // край на обхвата

let currentBarcode = start;
let validBarcodes = '';

while (currentBarcode <= end) {
  let barcodeString = currentBarcode.toString();
  let containsEvenDigit = false;

  for (let i = 0; i < barcodeString.length; i++) {
    let digit = parseInt(barcodeString[i]);
    if (digit % 2 === 0) {
      containsEvenDigit = true;
      break;
    }
  }

  if (!containsEvenDigit) {
    validBarcodes += barcodeString + ' ';
  }

  currentBarcode++;
}

console.log(validBarcodes);