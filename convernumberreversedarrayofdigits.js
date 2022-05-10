//Random non-negative number
//Return the digits of this number within an array in reverse order

function digitize(n) {
 
  //define variable that makes the number into an array
  //using the Array.from() method to create a new array instance
  //defines n as a string to separate it into an array, and then a number
  let numToArray = Array.from(String(n), Number);

  //console.log(numToArray); //using this console log and playing with the .from() method, I was able to see how it was working.

  //define a variable that holds the reversed array  
  let reversedArray = numToArray.reverse();

  //return the reversed array
  return reversedArray;


 //Codewars common solution
 //In this case, the .map() method is turning the string back into a number.
  //return String(n).split('').map(Number).reverse()
 


  /*
    //convert number to a string and store the value in a variable
    let numToString = n.toString();
    
    //split the string and store the value in a variable
    let splitString = numToString.split('');
      
    //reverse the string and store as an array in a variable
    let reversedArray = splitString.reverse();

    //return the array
    return reversedArray;
  */
  };


  console.log(digitize(35231));
  console.log(0);

  //Need to figure out how to ouput as numbers instead of strings
  //Solution - string back to number using .from() or .map()