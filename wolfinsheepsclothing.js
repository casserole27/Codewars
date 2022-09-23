
function warnTheSheep(queue) {

let position = queue.reverse().indexOf("wolf");

if (position === 0) {
   return "Pls go away and stop eating my sheep";
} else {
   return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`; 
}

};

//? A for loop is needed to iterate over the sheep / wolf array.
//? Position of the wolf should be identified. 
//? If wolf is at a certain index, return a statement pertaining to the sheep "in front" of it

//? https://modthefuture.com/2022/02/28/codewars-a-wolf-in-sheeps-clothing-solution-javascript/
//? exploring reversing the array, and finding "indexOf" the "wolf"

//! A for loop was not needed in this case
//! I just needed to find the position, the "indexOf" the wolf
//! Reversing the array was much simpler than trying to count backwards over the array
//! Reversing the array made the indexOf the wolf's position into the position of the sheep we needed to warn
//! ['sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']
//! The wolf is at index 2 because array indexes start at 0, but the sheep we need to warn is at index two because of the way the problem is set up.
//! I also had to remember to strictly equals $position in my if/else statement, '=' was trying to reassign $position to 0
//? REMEMBER: working with arrays don't always equal for loops!


// TODO Simplest answer from Codewars
// TODO I know this is shorter, but I prefer if/else longhand?
/*function warnTheSheep(queue) {
   const position = queue.reverse().indexOf('wolf');
   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
 }
*/ 

/*console.log(queue);
let wolfPosition = "";
for (let i = 0; i < queue.length; i++) {
   wolfPosition += queue[i];
}

console.log(wolfPosition);*/

//console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
//"Oi! Sheep number 2! You are about to be eaten by a wolf!"));

/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/