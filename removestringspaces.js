//Remove spaces from a string, return the result

function noSpace(x){
    return x.replace(/\s+/g, '');
  };

//this function uses the .replace method and a regular expression
// \s matches any whitespace symbol
// + matches one or more of the preceding tokens
// g find more than the first match - iterative searching

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');

console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');