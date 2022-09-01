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
    if (month >= 7 && month <= 9) {
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


//Wow!!! Some users provided this solution, so simple and elegant.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
//The Math.ceil() function always rounds a number up to the next largest integer. 
//In this example, August is the 8th month, represented as the integer 8.
//8/3 = 2.666667, Math.ceil would round this up to 3, which would place August in the 3rd quarter and return 3. 
//For May, 5/3 = 1.66667, round up to 2, return 2 for 2nd quarter.
const quarterOf = m => Math.ceil(m/3);
console.log(quarterOf(8));


