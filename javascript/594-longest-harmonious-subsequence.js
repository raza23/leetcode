var findLHS = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[[nums[i]]] + 1 || 1;
  }

  let sum = 0;
  for (let i in map) {
    const s = map[i] + map[i - 1] || 0 + map[i + 1] || 0;
    sum = Math.max(sum, s);
  }
  return sum > 1 ? sum : 0;
};
