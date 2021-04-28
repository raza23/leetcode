var flipAndInvertImage = function(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length / 2; j++) {
      var k = A.length - 1 - j;
      var left = A[i][j] == 0 ? 1 : 0;

      var right = A[i][k] == 0 ? 1 : 0;

      A[i][j] = right;
      A[i][k] = left;
    }
  }

  return A;
};
