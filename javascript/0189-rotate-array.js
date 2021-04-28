var rotate = function(nums, k) {
  let x = 0;

  while (x < k) {
    let c = nums.pop();
    nums.unshift(c);
    x++;
  }
};
