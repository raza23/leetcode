var majorityElement = function(nums) {
  let map = new Map();
  let half = nums.length / 2;

  if (nums.length === 1) return nums[0];

  for (let i of nums) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }

    if (map.get(i) > half) return i;
  }

  return -1;
};
