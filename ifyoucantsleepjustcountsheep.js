var countSheep = function (num){
    
    //? Input a number greater than or equal to 0
    //? Return a string
    //? As the number increments, the string increments: 3 returns "1 sheep...2 sheep...3 sheep..." and so on
    //? A for loop will count

    let sheep = '';

    for (let i = 1; i <= num; i++) {
      sheep += i + ' sheep...'
    }

    return sheep;

  }

console.log(countSheep(0))//, "");
console.log(countSheep(1))//, "1 sheep...");
console.log(countSheep(2))//, "1 sheep...2 sheep...");
console.log(countSheep(3))//, "1 sheep...2 sheep...3 sheep...");  
console.log(countSheep(7))//, "1 sheep...2 sheep...3 sheep...");  



// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
