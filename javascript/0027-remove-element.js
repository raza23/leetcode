// Day 4
// 10.4

var removeElement = function(nums, val) {
  let point1 = 0;
  for (let point2 = 0; point2 < nums.length; point2++) {
    if (nums[point2] !== val) {
      nums[point1] = nums[point2];
      point1++;
    }
  }
  return point1;
};
