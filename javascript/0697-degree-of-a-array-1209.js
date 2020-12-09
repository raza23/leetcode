// 12/9
//

var findShortestSubArray = function(nums) {
  let num_counts = new Map();
  let degree = 0;

  let first_seen = new Map();
  let min_length = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (!first_seen.has(nums[i])) {
      first_seen.set(nums[i], i);
    }

    num_counts.set(
      nums[i],
      (num_counts.has(nums[i]) ? num_counts.get(nums[i]) : 0) + 1
    );

    if (num_counts.get(nums[i]) > degree) {
      degree = num_counts.get(nums[i]);
      min_length = i - first_seen.get(nums[i]) + 1;
    } else if (num_counts.get(nums[i]) === degree) {
      min_length = Math.min(min_length, i - first_seen.get(nums[i]) + 1);
    }
  }
  return min_length;
};
