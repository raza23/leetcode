// 11/13

var intersection = function(nums1, nums2) {
  let firstSet = new Set();
  let commonSet = new Set();

  for (let num of nums1) {
    firstSet.add(num);
  }

  for (let num of nums2) {
    if (firstSet.has(num)) {
      commonSet.add(num);
    }
  }

  return Array.from(commonSet);
};
