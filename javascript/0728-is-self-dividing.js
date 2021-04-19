var selfDividingNumbers = function(left, right) {
  var results = [];

  for (let i = left; i <= right; i++) {
    let den = 1;
    let num = i;
    let isSelfDiv = true;

    while (num > 0 && isSelfDiv) {
      let digit = Math.floor(i / den) % 10;
      isSelfDiv = i % digit == 0 && digit != 0;
      den = den * 10;
      num = Math.floor(num / 10);
    }

    if (isSelfDiv) {
      results.push(i);
    }
  }

  return results;
};
