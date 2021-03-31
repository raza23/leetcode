var tree2str = function(t) {
  if (t == null) return "";

  let left = t.right ? "()" : "";
  let right = "";

  if (t.left) left = `(${tree2str(t.left)})`;

  if (t.right) right = `(${tree2str(t.right)})`;

  return t.val + left + right;
};
