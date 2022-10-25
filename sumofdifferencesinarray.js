function sumOfDifferences(arr) {
  
  const reversed = arr.reverse();
  
  //for (let i = 0; i <= reversed.length; i++) 
  
  const sum = (reversed[0] - reversed[1] + reversed[1] - reversed[2]);

  return sum;
}

//? This logic works for arrays with three values. 
//? It doesn't work for larger or smaller values, or when we need to return 0.
//! Iterate over array

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));


/*
describe("sumOfDifferences([1, 2, 10]", function() {
  Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
});

describe("sumOfDifferences([-3, -2, -1])", function() {
  Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
});
*/

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/