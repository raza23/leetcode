// 11/19

var findComplement = function(num) {
  let sum = 0;
  let i = 0;
  while (sum < num) {
    sum += Math.pow(2, i);
    i++;
  }
  return sum - num;
};
