var averageOfLevels = function(root) {
  let AverageValues = [];
  let queue = [root];
  while (queue.length) {
    const queueLength = queue.length;
    let sum = 0;
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    AverageValues.push(sum / queueLength);
  }
  return AverageValues;
};
