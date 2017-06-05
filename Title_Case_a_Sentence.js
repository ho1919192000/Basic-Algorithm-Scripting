/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(str){return str.charAt(0).toUpperCase()+str.substring(1);}).join(" ");
}

titleCase("I'm a little tea pot");
//I'm A Little Tea Pot

//Another solution
function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(str){return str.replace(str[0],str[0].toUpperCase());}).join(" ");
}

titleCase("I'm a little tea pot");
//I'm A Little Tea Pot