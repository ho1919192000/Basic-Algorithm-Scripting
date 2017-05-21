function findLongestWord(str) {
  return Math.max.apply(null, str.split(" ").map(function(str){return str.length;}).sort());
}

findLongestWord("The quick brown fox jumped over the lazy dog");