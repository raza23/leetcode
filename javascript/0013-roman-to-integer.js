//! Day 2
// ! 9.30

var romanToInt = function(s) {
  let dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currInt = dict[s.charAt(i)];
    let nextInt = dict[s.charAt(i + 1)];

    if (nextInt) {
      if (currInt >= nextInt) {
        total += currInt;
      } else {
        total += nextInt - currInt;
        i++;
      }
    } else {
      total += currInt;
    }
  }
  return total;
};
