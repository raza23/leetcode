var findTilt = function(root) {
  let total = 0;

  findSum(root);

  return total;

  function findSum(node) {
    if (node == null) return 0;

    const left = findSum(node.left);
    const right = findSum(node.right);

    const sum = left + right;

    total += Math.abs(left - right);

    return sum + node.val;
  }
};
