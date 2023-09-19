function moving(input) {
index = 0;

let width = Number(input[index]);
index++

let length = Number(input[index]);
index++

let hight = Number(input[index]);
index++

let freeSpace = width * length * hight;

let boxes = input[index];

while (boxes !== "Done") {

    boxes = Number(boxes);
    freeSpace -= boxes;
    
    if (freeSpace <= 0) {
        break;
    }
    index++
    boxes = input[index];
}

if (boxes === 'Done') {
    console.log(`${freeSpace} Cubic meters left.`);
}
if (freeSpace <= 0) {
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
}
    
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
