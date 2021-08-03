var rotate = function(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i !== j) {
        let temp = matrix[i][j];
        // console.log(temp)
        // console.log('i',i,'j',j)

        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
        // console.log('m',matrix)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      console.log("i", i, "j", j);
      console.log("m", matrix);
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
};
