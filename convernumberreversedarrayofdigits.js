//Random non-negative number
//Return the digits of this number within an array in reverse order

function digitize(n) {
    //convert number to a string and store the value in a variable
    let numToString = n.toString();
    
    //split the string and store the value in a variable
    let splitString = numToString.split('');
      
    //reverse the string and store as an array in a variable
    let reversedArray = splitString.reverse();

    //return the array
    return reversedArray;

    
  };

  console.log(digitize(35231));
  console.log(0);

  //Need to figure out how to ouput as numbers instead of strings