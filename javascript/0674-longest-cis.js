var findLengthOfLCIS = function(nums) {
  let sequence = 1;
  let maxSeq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      sequence++;
    } else {
      sequence = 1;
    }

    maxSeq = Math.max(sequence, maxSeq);
  }

  return maxSeq;
};
