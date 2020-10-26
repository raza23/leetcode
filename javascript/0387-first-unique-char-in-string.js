// 10/24

var firstUniqChar = function(s) {
  let charMap = {};
  let result = -1;

  for (let char of s) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (charMap[char] === 1) {
      return i;
    }
  }
  return result;
};
