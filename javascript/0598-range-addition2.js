var maxCount = function(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const op of ops) {
    minRow = Math.min(minRow, op[0]);

    minCol = Math.min(minCol, op[1]);
  }

  return minRow * minCol;
};
