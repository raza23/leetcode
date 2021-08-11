// 10/10

var climbStairs = function(n) {
  let countingFunc = function(stairsLeft, savedResults) {
    if (stairsLeft < 0) return 0;
    if (stairsLeft === 0) return 1;
    if (savedResults[stairsLeft]) return savedResults[stairsLeft];

    savedResults[stairsLeft] =
      countingFunc(stairsLeft - 1, savedResults) +
      countingFunc(stairsLeft - 2, savedResults);
    return savedResults[stairsLeft];
  };

  return countingFunc(n, {});
};

var climbStairs = function(n) {
  let arr = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr(n - 1);
};
