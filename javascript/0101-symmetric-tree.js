// 10.14

var isSymmetric = function(root) {
  if (root === null) return true;
  return isMirror(root.left, root.right);
};

var isMirror = function(t1, t2) {
  if (t1 === null || t2 === null) return t1 === t2;
  if (t1.val !== t2.val) return false;

  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
};
