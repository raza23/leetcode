// Day 5
// 10.12.

var isHappy = function(n) {
  const previous = new Set();
  while (n !== 1) {
    let currentSum = 0;
    while (n > 0) {
      currentSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (!previous.has(currentSum)) {
      previous.add(currentSum);
      n = currentSum;
    } else {
      return false;
    }
  }
  return true;
};
