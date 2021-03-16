var maxDepth = function(root) {
  let depth = 0;
  let currentLevel = [];

  if (root !== null) currentLevel.push(root);
  while (currentLevel.length > 0) {
    // console.log(currentLevel)

    depth += 1;
    let len = currentLevel.length;
    while (len > 0) {
      let node = currentLevel.shift();
      console.log("node:", node);
      console.log(node.children.length);
      for (let i = 0; i < node.children.length; i++) {
        currentLevel.push(node.children[i]);
        console.log("Cl", currentLevel);
      }
      len -= 1;
    }
  }
  return depth;
};
