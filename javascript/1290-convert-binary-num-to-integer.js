var getDecimalValue = function(head) {
  let res = 0;
  while (head) {
    if (head.val === 1) {
      console.log("r", res);
      res += 1;
      console.log(res);
    }
    console.log("res", res);
    head = head.next;
    res *= 2;
  }
  console.log(res);
  return res / 2;
};
