// Problem 1/3 ---- 11/21

var nextGreaterElement = function(nums1, nums2) {
  let map = {};
  let stack = [];

  for (let n of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  }

  let result = [];
  for (let n of nums1) {
    if (n in map) {
      result.push(map[n]);
    } else {
      result.push(-1);
    }
  }

  return result;
};
