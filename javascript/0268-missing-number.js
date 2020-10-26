// 10/26

var missingNumber = function(nums) {
  let fullArraySum = nums.length;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    fullArraySum += i;
    sum += nums[i];
  }
  return fullArraySum - sum;
};
