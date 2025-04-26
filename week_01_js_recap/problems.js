function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return console.log(revStr);
}

reverseString("Hello");

function findMax(arr) {
  let max;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      max = arr[i] + 1;
    }
    max = arr[i];
  }
  return console.log(max);
}

findMax([1, 5, 3, 9]);

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === word[word.length - 1 - i]) {
      return console.log("true");
    }
    return console.log("false");
  }
}

isPalindrome("racecar");
isPalindrome("hello");

module.exports = { reverseString, findMax, isPalindrome };
