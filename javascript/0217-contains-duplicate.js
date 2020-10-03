// Day 6
// 10.3

var containsDuplicate = function(nums) {
  let seen = new Set();

  if (nums.length === 0) return false;
  for (var i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.add(nums[i]);
    }
  }
  return false;
};
