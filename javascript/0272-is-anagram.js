// Day 7
// 10.4

var isAnagram = function(s, t) {
  var charMap = {};
  if (s.length !== t.length) return false;

  for (let char of s) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char of t) {
    if (charMap[char] === undefined) {
      return false;
    }
    if (charMap[char] < 1) {
      return false;
    }
    charMap[char]--;
  }
  return true;
};
