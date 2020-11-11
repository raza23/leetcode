// 11/10

var binaryTreePaths = function(root) {
  const result = [];
  if (!root) return result;

  function findPath(node, currentPath) {
    currentPath += node.val;

    if (!node.left && !node.right) {
      result.push(currentPath);
    }

    if (node.left) findPath(node.left, currentPath + "->");
    if (node.right) findPath(node.right, currentPath + "->");
  }

  findPath(root, "");
  return result;
};
