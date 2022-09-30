
function elevator(left, right, call){
    
    if (Math.abs(call - left) < Math.abs(call - right)) {
      return "left";
    } else {
      return 'right';
    }

    //TODO shortest solution: const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'
    
    //!! I really did work hard on this own my own, but just couldn't come up with the right math.
    //! If the floor call minus the left floor is less than the floor call minus the right floor, than we need the elevator on the left
    //! Else we need the elevator on the right
    //! 0 - 0 < 0 - 1 true -> left
    //! 1 - 0 < 1 - 1 false -> right
    //! 2 - 0 < 2 - 1 false -> right
    //! 0 - 1 < 2 - 0 true -> left
    //! Math.abs() is a function that returns the absolute value of a number, so in this instance it would not return a negative number
    //? I learned about Math.abs() by googling the solution to the problem
    
    // if (left === right)
      // return 'right';
    // else if (left === call) {
      // return "left";
    // } else if (left === 1 && right === 0) {
      // return "left";
    // } else if (left === 1 && right === 2 ) {  
      // return "left";
    // } else { 
      // return "right";
    // }  
}; 

//! RED
//? BLUE
//TODO ORANGE
//* GREEN



  
console.log(elevator(0, 1, 0)); //left
console.log(elevator(0, 1, 1)); //right
console.log(elevator(0, 1, 2)); //right
console.log(elevator(0, 0, 0)); //right
console.log(elevator(0, 2, 1)); //right //!
console.log(elevator(1, 2, 0)); //left
console.log(elevator(1, 0, 2)); //left
console.log(elevator(1, 0, 0)); //right
console.log(elevator(1, 2, 2)); //right





//? If call's number is closest to left number -> return left
//? If call's number is closest to right number -> return right
//? If left and right are equidistant from call -> return right left === right === call
//? Inputs are always 0 - 2 

//? Left can === 0, 1, 2
//? Right can === 0, 1, 2
//? Call can === 0, 1, 2

/* Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

    left - The current floor of the left elevator
    right - The current floor of the right elevator
    call - The floor that called an elevator

It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
*/