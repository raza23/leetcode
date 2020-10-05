// Day 9
// 10.5

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let p1 = 0;
  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
  }
  return p1 + 1;
};
