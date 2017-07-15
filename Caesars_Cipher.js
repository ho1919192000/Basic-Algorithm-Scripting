/*
freeCodeCamp Algorithm Challenge Guide: Caesars Cipher

Problem Explanation:

You need to write a function, which will take a string encoded with Caesar cipher as a parameter and decode it.
The one used here is ROT13 where the value of the letter is shifted by 13 places. e.g. 'A' <=> 'N', 'T' <=> 'G'.
You have to shift it back 13 positions, such that 'N' <=> 'A'.
*/

//Solution 1
function rot13(str) { // LBH QVQ VG!
    var arr1 = str.split("");
    return arr1.map(function (x) {
        var n = x.charCodeAt();
        if (n >= 65 && n <= 77) {
            return String.fromCharCode(n + 13);
        } else if (n >= 78 && n <= 90) {
            return String.fromCharCode(n - 13);
        }
        return String.fromCharCode(n);
    }).join("");
}
rot13("SERR CVMMN!") //"FREE PIZZA!"

//Solution 2
function rot13(str) {
    return str.replace(/[A-Z]/g, function (x) {
        return String.fromCharCode((x.charCodeAt() % 26) + 65);
    });
}
rot13("SERR CVMMN!"); //"FREE PIZZA!"

//Solution 2-1
function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
rot13("SERR CVMMN!") //"FREE PIZZA!"