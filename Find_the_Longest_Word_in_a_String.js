function findLongestWord(str) {
  return Math.max.apply(null, str.split(" ").map(function(str){return str.length;}).sort());
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Another solution that pull out the longest words
function findLongestWord(str) {
     var s = Math.max.apply(null, str.split(" ").map(function(str){return str.length;}).sort());
     return str.split(" ").filter(function(word){
              return word.length == s;
              })   
}

findLongestWord("The quick brown fox jumped and kicked over the lazy dog");
// ["jumped", "kicked"]

//Revised solution
function findLongestWord(str) {    
     var word = str.split(" ");
     var s = Math.max.apply(null, word.map(function(str){return str.length;}));
     return word.filter(function(val){
              return val.length == s;
              })   
}
findLongestWord("The quick brown fox jumped and kicked over the lazy dog");
// ["jumped", "kicked"]
