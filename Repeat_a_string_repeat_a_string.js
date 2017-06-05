/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/
//Solution 1 with Recursion

function repeatStringNumTimes(str, num) {
    return (num < 0) ? "" : (num === 1) ? str : str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

//Solution 2 with str.repeat()
function repeatStringNumTimes(str, num) {
    return (num > 0) ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

//Solution 3 with while
function repeatStringNumTimes(str, num) {
    var acc = "";

    while (num > 0) {
        acc += str;
        num--;
    }

    return acc;
}

repeatStringNumTimes("abc", 3);

