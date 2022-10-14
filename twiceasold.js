function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - (sonYearsOld * 2));
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));

//? I found this one to be very straightforward (finally?!).
//? I added the Math.abs() method that I used in the closest elevator kata to avoid negative numbers.
//? I felt that this method would make the cleanest and least lines of code.


  //If sonYearsOld = dadYearsOld * 2, return 0
  //Else return dadYearsOld - (sonYearsOld * 2)

/*
describe("Sample tests", function(){
  it("Testing for dad's age: 36 and son's age: 7", function(){
    assert.strictEqual(twiceAsOld(36,7) , 22);
  });  
  it("Testing for dad's age: 55 and son's age: 30", function(){
    assert.strictEqual(twiceAsOld(55,30) , 5);
  });
  it("Testing for dad's age: 42 and son's age: 21", function(){
    assert.strictEqual(twiceAsOld(42,21) , 0);
*/

/*
Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/