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
