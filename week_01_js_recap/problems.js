function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

reverseString("Hello");

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Empty array");
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

findMax([1, 5, 3, 9]);

function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome("racecar");
isPalindrome("hello");

module.exports = { reverseString, findMax, isPalindrome };
