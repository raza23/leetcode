// 10/19

var levelOrderBottom = function(root) {
  let result = [];
  let queue = [];
  if (root === null) return result;

  queue.push(root);

  while (queue.length !== 0) {
    let nodeCount = queue.length;
    let rowResult = [];

    while (nodeCount > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      rowResult.push(currentNode.val);
      nodeCount--;
    }

    result.unshift(rowResult);
  }
  return result;
};
