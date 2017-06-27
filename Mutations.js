/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//Solution 1
function mutation(arr) {

    arr = arr.map(function (x) {
        return x.toLowerCase();
    });
    var test = arr[1].split("");

    for (var i = 0; i < test.length; i++) {
        if (arr[0].indexOf(test[i]) === -1) {
            return false;
        }
    }

    return true;
}
mutation(["floor", "for"]); //return true

//Solution 2 with Array.prototype.every()

function mutation(arr) {
    return arr[1].toLowerCase().split("").every(function (x) {
        return arr[0].toLowerCase().indexOf(x) !== -1
    });
}
mutation(["floor", "for"]); //return true