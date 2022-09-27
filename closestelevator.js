
function elevator(left, right, call){
    // code on! :)
    if (left === right === call) {
      return "right";
    } else if (left === call || left === call + 1) {
      return "left";
    } else if (right === call || right === call + 1) { 
      return "right";
    }  
}; 
  
console.log(elevator(0, 1, 0)); //left
console.log(elevator(0, 1, 1)); //right
console.log(elevator(0, 1, 2)); //right
console.log(elevator(0, 0, 0)); //right
console.log(elevator(0, 2, 1)); //right




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