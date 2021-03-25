var distributeCandies = function(candyType) {
  var set = new Set();
  var mid = candyType.length / 2;
  for (candy of candyType) {
    set.add(candy);
  }

  return set.size < mid ? set.size : mid;
};
