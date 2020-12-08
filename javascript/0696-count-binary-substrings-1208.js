// 12/8

var countBinarySubstrings = function(s) {
  var prevInt = 0;
  var currInt = 1;
  var currChar = s.charAt(0);
  var binaryCount = 0;
  for (var i = 1; i < s.length; i++) {
    if (s.charAt(i) === currChar) {
      currInt++;
    } else {
      binaryCount += Math.min(prevInt, currInt);
      prevInt = currInt;
      currInt = 1;
    }
    currChar = s.charAt(i);
  }
  binaryCount += Math.min(prevInt, currInt);
  return binaryCount;
};
