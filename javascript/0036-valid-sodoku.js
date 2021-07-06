var isValidSudoku = function(board) {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val !== ".") {
        let columnKey = `column-${val}-column-${j}`;
        console.log(columnKey);
        let rowKey = `row-${val}-${i}`;

        let boxRowKey = Math.floor(i / 3);
        let boxColumnKey = Math.floor(j / 3);

        let boxKey = `box-${val}-${boxRowKey}-${boxColumnKey}`;

        if (arr[columnKey] || arr[rowKey] || arr[boxKey]) {
          return false;
        } else {
          arr[columnKey] = 1;
          arr[rowKey] = 1;
          arr[boxKey] = 1;
        }
      }
    }
  }
  return true;
};
