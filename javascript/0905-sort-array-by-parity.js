var sortArrayByParity = function(A) {
  const nums = [];
  for (let num of A) {
    if (num % 2 === 1) {
      nums.push(num);
    } else {
      nums.unshift(num);
    }
  }
  return nums;
};
