// 10/8

var maxSubArray = function(nums) {
  let current = nums[0];
  let global = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);

    if (current > global) {
      global = current;
    }
  }
  return global;
};
