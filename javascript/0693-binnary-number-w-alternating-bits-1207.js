// 12/7

var hasAlternatingBits = function(n) {
  var lastInt = n % 2;
  n >>= 1;
  while (n > 0) {
    var currentInt = n % 2;
    if (currentInt === lastInt) {
      return false;
    }
    lastInt = currentInt;
    n >>= 1;
  }
  return true;
};
