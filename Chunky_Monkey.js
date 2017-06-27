/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

//Solution 1
function chunkArrayInGroups(arr, size) {
    var newArr = [];

    while (arr.length > 0) {
        newArr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //return [["a", "b"], ["c", "d"]]

//Solution 2
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var i = 0;
    var l = arr.length;

    while (i < l) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) //return [[0, 1, 2], [3, 4, 5], [6]]

//Solution 3 with tail recursive
function chunkArrayInGroups2(arr, rowSize, arr2d) {
    var arr2d = arr2d||[];
    if (arr.length <= rowSize) {
        arr2d.push(arr);
        return arr2d;
    }
    arr2d.push(arr.slice(0, rowSize));
    return chunkArrayInGroups2(arr.slice(rowSize), rowSize, arr2d);
}
// call the function like this
chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6], 3);
