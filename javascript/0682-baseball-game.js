const calPoints = ops => {
  let stack = [];
  let res = 0;
  for (let x = 0; x < ops.length; x++) {
    if (ops[x] === "+") {
      let top = stack[stack.length - 1];
      let top2 = stack[stack.length - 2];
      stack.push(top + top2);
      res += top + top2;
    } else if (ops[x] === "D") {
      let top = stack[stack.length - 1];
      stack.push(top * 2);
      res += top * 2;
    } else if (ops[x] === "C") {
      let top = stack.pop();
      res -= top;
    } else {
      stack.push(parseInt(ops[x]));
      res += parseInt(ops[x]);
    }
  }

  return res;
};
