var generateParenthesis = function(n) {
  let result = [];

  function go(str, closedLeft, openLeft) {
    if (str.length === n * 2) {
      result.push(str);
    }
    if (openLeft > 0) {
      go(str + "(", closedLeft + 1, openLeft - 1);
    }
    if (closedLeft > 0) {
      go(str + ")", closedLeft - 1, openLeft);
    }
    console.log(result);
  }

  go("", 0, n);
  return result;
};
