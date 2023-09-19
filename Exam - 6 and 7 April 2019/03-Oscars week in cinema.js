function oscarsWeekInCinema(input) {
    let total = 0;
    let movieTitle = input[0];
    let hallType = input[1];
    let quantity = Number(input[2]);

    if (movieTitle === 'A Star Is Born') {
        if (hallType === 'normal') {
            total = quantity * 7.50;
        } if (hallType === 'luxury') {
            total = quantity * 10.50;
        } if (hallType === 'ultra luxury') {
            total = quantity * 13.50;
        }
    }
    else if (movieTitle === 'Bohemian Rhapsody') {
    } if (hallType = 'normal') {
        total = quantity * 7.35;
    } if (hallType === 'luxury') {
        total = quantity * 9.45;
    } if (hallType === 'ultra luxury') {
        total = quantity * 12.75;
    }
    else if (movieTitle === 'Green Book') {
    } if (hallType = 'normal') {
        total = quantity * 8.15;
    } if (hallType === 'luxury') {
        total = quantity * 10.25;
        if (hallType === 'ultra luxury') {
            total = quantity * 13.25;
        }
        else if (movieTitle === 'The Favourite') {
            if (hallType = 'normal') {
                total = quantity * 8.75;
                if (hallType === 'luxury') {
                    total = quantity * 11.55;
                    if (hallType === 'ultra luxury') {
                        total = quantity * 13.95;
                    }
                }
            }

        }
    }
    console.log(`${movieTitle} -> ${total.toFixed(2)} lv.`);
}
oscarsWeekInCinema(['A Star Is Born', 'luxury', '42'])
// Филм  	           normal	          luxury	   ultra luxury
// A Star Is Born	    7.50 лв.  	    10.50 лв.	    13.50 лв.
// Bohemian Rhapsody	7.35 лв.	9.45 лв.	       12.75 лв.
// Green Book	         8.15 лв.	  10.25 лв.	      13.25 лв.
// The Favourite	    8.75 лв.	  11.55 лв.	       13.95 лв.

// let normal = 7.50 * ticketsCount;
//     let luxury = 10.50 * ticketsCount;
//     let ultraLuxury = 13.50 * ticketsCount;