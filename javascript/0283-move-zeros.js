var moveZeroes = function(nums) {
  let p1 = 0;

  for (let p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] !== 0) {
      let temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;

      p1++;
    }
  }
};
