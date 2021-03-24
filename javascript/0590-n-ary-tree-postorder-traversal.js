var postorder = function(root) {
  const stack = [];
  const arr = [];
  stack.push(root);
  while (stack.length && root !== null) {
    let node = stack.pop();
    console.log("node:", node);
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
    arr.unshift(node.val);
  }
  return arr;
};
