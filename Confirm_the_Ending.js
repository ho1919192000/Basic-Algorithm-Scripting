/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

//Solution 1 with endsWith()
function confirmEnding(str, target) {

    return str.endsWith(target);
}

confirmEnding("Bastian", "n");

//Solution 2 with substring()

function confirmEnding(str, target) {

    return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//Solution 3 with substr()
function confirmEnding(str, target) {

    return str.substr(-target.length) === target;
}
//str.substr(-3) is treated as str.substr(str.length - 3)
confirmEnding("Bastian", "n");