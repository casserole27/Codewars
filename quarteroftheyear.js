const quarterOf = (month) => {
    //Jan - Dec = 1 - 12
    //1 - 3 months return 1
    //4 - 6 months return 2
    //7 - 9 months return 3
    //10 - 12 months return 4

    //When month is input as integer, use if statements, > or < operators, and  logical operators "&&" to determine the quarter.

    if (month >= 1 && month <= 3) {
        return 1;
    }
    if (month >= 4 && month <= 6) {
        return 2;
    }
    if (month >= 6 && month <= 8) {
        return 3;
    } 
    if (month >= 10 && month <= 12) {
        return 4;
    }
    }; 

console.log(quarterOf(8));  

/*
Given a month as an integer from 1 to 12, 
return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), 
is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/


