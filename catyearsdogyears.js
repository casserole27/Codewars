const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears;
    let dogYears;

    if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;

    } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
   
    } else if (humanYears >= 3) {
    catYears = (humanYears - 2) * 4 + 24; 
    dogYears = (humanYears - 2) * 5 + 24;
}
    return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(13));

/*
Problem solving method:

1. I went through the notes and instructions to verify what I knew.
 - function expression that returns three values
 - the function should have one parameter, "humanYears" 
 - that parameter then determines the ages in cat years and dog years by using JavaScript arithmetic operators
 - else/if statements for different values of humanYears parameter

2. MDN documentation and Google searching - 
 - I wasn't entirely certain how to return multiple values from a function.
 - The initial problem returned an array with 0s as placeholders, so I began with arrays
 - I went through the function and array MDN documentation
 - I Googled "javascript function return multiple values" : make a function that returns an array, and
    then assign that function to a variable. The problem started with a function expression, so I just needed the values.

3. Define catYear and dogYear variables, and assign each their proper value in each if/else statment using arithmatic operators.

4. Test in the console:
console.log(humanYearsCatYearsDogYears(13));

/*


//I have a cat and a dog.

//I got them at the same time as kitten/puppy. That was humanYears years ago.

//Return their respective ages now as [humanYears,catYears,dogYears]



/*
NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/