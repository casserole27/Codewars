
function sumOfDifferences(arr) {
  arr.sort((a,b) => b - a);

  console.log(arr);

  let sum = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    
    sum += arr[i] - arr[i + 1];

    sum = sum + 10 - 10 + 1
            
}

return sum;
}

// Codewars solution:
// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }


//** MY INITIAL LOGIC */
//? I was not familiar with the .sort() method

// function sumOfDifferences(arr) {
  
//   let reversed = arr.reverse();
//   //* 10, 2, 1
//   //* -17, 17  ->  17, -17  ->  34 (but currently returns NaN)

//   console.log(reversed);

//   for (let i = 0; i <= reversed.length; i++) {
//     console.log(i);
//     // reversed += i -> returns infinite loop
//     //! This would cover 0 and the AMOUNT of items in the array
//     //! Returns 0, and then 1, 2, 3  - should i equal one or zero?
//     //! We need the actual numbers of the array
//   }
  
//   const sum = ((reversed[0] - reversed[1]) + (reversed[1] - reversed[2]));
//   //? This logic works for arrays with three values. 
//   //? It doesn't work for larger or smaller values, or when we need to return 0.
//   //! Iterate over array?

//   //* The mathematics need to be somehow based on the length of the array, and I'm not sure how to achieve that for different lengths.

//   return sum;
//   // return reversed;
// }



console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([-17, 17]));



/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/