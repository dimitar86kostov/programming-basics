function hospital(input) {

    let period = Number(input[0]);
    let doctors = 7;

    let treatedP = 0;
    let untreatedP = 0;

    for (let i = 1; i <= period; i++) {
        let curPatients = Number(input[i]);
        if (i === 3 || i === 6 || i === 9 || i === 12 || i === 15 || i === 18) {
            doctors += 1;

        } if (doctors >= curPatients) {
            treatedP += curPatients;

        } if (doctors < curPatients) {
            untreatedP += curPatients - doctors;
            treatedP += doctors;
        }
    }
    console.log(`Treated patients: ${treatedP}.`);
    console.log(`Untreated patients: ${untreatedP}.`);
}
hospital(['6', '7', '7', '7'])