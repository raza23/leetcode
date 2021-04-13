var maximumProduct = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let product1 = sorted[0] * sorted[1] * sorted[nums.length - 1];
  let product2 =
    sorted[nums.length - 1] * sorted[nums.length - 2] * sorted[nums.length - 3];
  return Math.max(product1, product2);
};
