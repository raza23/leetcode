// 10/17

var singleNumber = function(nums) {
  nums.sort();
  for (var i = 0; i < nums.length; i = i + 2) {
    if (nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
};
