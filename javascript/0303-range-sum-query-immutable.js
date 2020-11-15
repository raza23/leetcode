// 11/12

var NumArray = function(nums) {
  this.runningtotal = [0];

  for (let i = 0; i < nums.length; i++) {
    this.runningtotal[i + 1] = nums[i] + this.runningtotal[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.runningtotal[j + 1] - this.runningtotal[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
