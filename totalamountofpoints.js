
function points(games) {
    // your code here
    // ? A for loop is needed to iterate over the values of the array to count the points.
    // ? I am unsure about the x:y format. How to define the first number as x and the second as y, or to separate them?
    // ? "1:0" = x > y = 3 points
    // ? x is always 0 - 4?
        let result = 0;
        for (let i = 0; i < games.length; ++i)
        {
          if (games[i][0] > games[i][2])
            result += 3;
          if (games[i][0] == games[i][2])
            result += 1;
        }
        return result;
      }
      //! I had initially made an if/else statement, which was breaking the code, or simply making in run differently.
      //! We want both of these outcomes to add together for the total amount of points, not if else the scores are tied.
      //! I was confused how to iterate over a ratio, but really we are just looking at specific indexes, and not counting index[1] because it is a ':'

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);  

//? two for loops?

/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

*/