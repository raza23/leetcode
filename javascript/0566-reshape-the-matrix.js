var matrixReshape = function(nums, r, c) {
  let row = nums.length;
  let col = nums[0].length;
  let result = [];

  if (row * col !== r * c) return nums;

  let flat = [];
  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    for (var j = 0; j < current.length; j++) {
      //             push everything too flat
      flat.push(current[j]);
    }
  }
  for (let i = 0; i < r; i++) {
    let column = flat.splice(0, c);
    result.push(column);
  }

  return result;
};
