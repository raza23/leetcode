var constructMaximumBinaryTree = function(nums) {
  if (!nums || nums.length == 0) return null;

  //Find Max
  let maxIndex = findMaxIndex(nums);
  let max = nums[maxIndex];
  console.log("mi19", maxIndex);

  //Create node
  let root = new TreeNode(max);
  console.log("root", root);

  //create left and right subarrays
  let left = nums.slice(0, maxIndex);
  let right = nums.slice(maxIndex + 1, nums.length);
  console.log("l", left);

  console.log("r", right);

  //create left and right subtree
  root.left = constructMaximumBinaryTree(left);
  root.right = constructMaximumBinaryTree(right);

  //return current node
  console.log("ROOT", root);
  return root;
};

function findMaxIndex(nums) {
  let maxIndex = 0,
    max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    console.log("curr", curr);
    console.log("max", max);
    if (curr > max) {
      maxIndex = i;
      max = curr;
      console.log("max1", max);
      console.log(maxIndex);
    }
  }
  console.log("miiiii", maxIndex);
  return maxIndex;
}
