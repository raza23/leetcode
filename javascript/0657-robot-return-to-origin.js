var judgeCircle = function(moves) {
  var moveKey = { U: 1.5, D: -1.5, R: 1, L: -1 };
  var spot = 0;

  for (var char of moves) {
    spot += moveKey[char];
  }
  if (spot === 0) {
    console.log(spot);
    return true;
  }
  return false;
};
