var invertTree = function(root) {
  if (root === null) return root;

  var t1 = invertTree(root.left);
  var t2 = invertTree(root.right);

  root.left = t2;
  root.right = t1;

  return root;
};
