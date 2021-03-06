/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/
//Solution 1 with slice
function truncateString(str, num) {

    return num < 3 ? str.slice(0, num) + "..." : str.length <= num ? str : str.slice(0, num - 3) + "...";
}
truncateString("A-tisket a-tasket A green and yellow basket", 11); //should return "A-tisket...".

//Solution 2 with replace
function truncateString(str, num) {

    return num < 3 ? str.replace(str.slice(num), "...") : str.length <= num ? str : str.replace(str.slice(num - 3), "...");
}
truncateString("A-", 1); //should return "A...".