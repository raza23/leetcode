var trimBST = function(root, left, right) {
  if (root == null) {
    return null;
  }

  root.left = trimBST(root.left, left, right);

  root.right = trimBST(root.right, left, right);

  if (root.val < left) {
    root = root.right;
  } else if (root.val > right) {
    root = root.left;
  }

  return root;
};
