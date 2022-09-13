function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    
    //classPoints = [];
    //array
    // [2,3]
    //console.log(classPoints);
    //! I thought I had to define classPoints as an array myself,
    //! but it was already being passed in as an array.
    //! This logic caused the array to empty and the tests did not pass.

    classPoints.push(yourPoints);
    //put yourPoints into the array = 5
    //[2,3],5
    console.log(classPoints);
    
    let total = 0;
    for(let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
    //0 + 2
    //2 + 3
    //5 + 5
    //total = 10
    }
    //iterate through classPoints and add each iteration to the total
    console.log(total);    

    let avg = total / classPoints.length;
    //average the classPoints by dividing total by the length of the array
    //avg = 10 / 3 = 3.33
    console.log(avg);

    if (yourPoints > avg) {
    //5 > 3.33, should return true  
      return true;
    } else {
      return false;
    };
    //if yourPoints are greater than the average, return true, if they aren't return false
  }
  console.log(betterThanAverage([2, 3], 5));



// TODO Here is a simpler solution from Codewars 

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  //? From MDN webdocs
  //? The reducer walks through the array element-by-element, at each step adding the 
  //? current array value to the result from the previous step (this result is the running 
  //? sum of all the previous steps) — until there are no more elements to add. 
}
console.log(betterThanAverage([2, 3], 5));


//the value of classPoints is an array
//how average the values of an array? -> add values and divide by number of values
//add yourPoints in the average

//if yourPoints > classPoints average, return true, else false

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  if ((classPoints + yourPoints) / 2 >= yourPoints) {
    return true;
  } else if ((classPoints + yourPoints) / 2 <= yourPoints) {
    return false;
  }
}
*/