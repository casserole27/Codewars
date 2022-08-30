const quarterOf = (month) => {
    //Jan - Dec = 1 - 12
    //1 - 3 months return 1
    //4 - 6 months return 2
    //7 - 9 months return 3
    //10 - 12 months return 4

    /*const month = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    }*/

    let monthStr = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

    for (let i = 0; i <= monthStr.length; i++){ 
    
    if (i >= 0 && i <= 2) {
        return 1;
    }
    if (i >= 3 && i <= 5) {
        return 2;
    }
    if (i >= 6 && i <= 8) {
        return 3;
    } 
    if (i >= 9 && i <= 11) {
        return 4;
    }
    }  
  };

quarterOf(January);  

/*
Given a month as an integer from 1 to 12, 
return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), 
is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

// What is the easiest way to convert all the months to numbers?
// Could I use an array and use the array's indexes? That might be 0 - 11 though because January would be at 0.

//https://stackoverflow.com/questions/13566552/easiest-way-to-convert-month-name-to-month-number-in-js-jan-01
//https://www.youtube.com/watch?v=QXC_GQUPqLI