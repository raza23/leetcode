// 12/11

var search = function(nums, target) {
  if (nums.length === 0) return -1;

  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var midpoint = left + Math.floor((right - left) / 2);
    if (nums[midpoint] === target) {
      return midpoint;
    } else if (nums[midpoint] > target) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
  return -1;
};
