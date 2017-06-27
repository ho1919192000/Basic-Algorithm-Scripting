/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

//Solution 1 with slice
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

//Solution 1 with splice
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);