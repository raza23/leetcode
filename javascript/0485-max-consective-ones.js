// 11/20

var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      max++;
    } else {
      max = 0;
    }
    result = Math.max(result, max);
  }
  return result;
};
