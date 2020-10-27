// 10/27

var findTheDifference = function(s, t) {
  let charMap = {};

  for (let char of s) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char of t) {
    if (charMap[char] !== undefined && charMap[char] > 0) {
      charMap[char]--;
    } else {
      return char;
    }
  }

  return -1;
};
