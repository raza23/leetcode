// ! Day 2
// ! 9.28

var isPalindrome = function(x) {
  if (x < 0) return false;
  return x === reversedNum(x);
};

var reversedNum = function(x) {
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverse;
};
