function clock() {

    
    let hour = 0;
    let minutes = 0;
 
    while (true) {
     if (hour > 59){
     break;
     }
    
     
     hour++
     if (minutes > 59) {
        break;
    }
    console.log(`${hour}:${minutes}`);
    minutes++
    }
 
 }
 clock()