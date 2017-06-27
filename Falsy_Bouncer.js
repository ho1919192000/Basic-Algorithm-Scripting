/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
//Solution 1 with !!(not not) operator.

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(function (x) {
        return x !== 0 && !!x;
    });
}

bouncer([7, "ate", "", false, 9]); //return [7, "ate", 9]

//Solution 2 with Boolean object

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(function (x) {
        return x !== 0 && Boolean(x);
    });
}

bouncer([7, "ate", "", false, 9]);