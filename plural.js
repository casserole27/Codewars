//Determine if a plural is needed or not
//Take a number, and return true if a plural should be used with that number or false if not. 
//This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun. 

function plural(n) {
    if (n > 1 || n === 0) {
      return true;
    } else if (n < 1 && n > 0) {
      return true;
    } else {
      return false;
    }
  /*return n !== 1;*/
  };
  
  console.log(plural(0));
  console.log(plural(1));
  console.log(plural(0.5));

/*
This is my original solution, which is entirely too complicated.
I'm leaving the code as a lesson to reference. 

The simplest solution is:
function plural(n) {
    return n !== 1;
};

In this way, it would return true for everything except one. 
One is the only time we do not need a plural.
*/