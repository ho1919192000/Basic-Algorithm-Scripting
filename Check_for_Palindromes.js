function palindrome(str) {
  var patten=/[\W\s_]/g;
  var refinedStr = str.replace(patten,"").toLowerCase();
  console.log(refinedStr);
  return refinedStr === refinedStr.split("").reverse().join("");
}

palindrome("eye");