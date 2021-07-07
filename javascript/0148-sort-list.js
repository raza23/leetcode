var sortList = function(head) {
  let values = [];
  let cur = head;

  while (cur) {
    values.push(cur.val);
    // console.log(values)
    cur = cur.next;
  }
  values = values.sort((a, b) => a - b);

  cur = head;

  for (let val of values) {
    cur.val = val;
    console.log(cur);
    cur = cur.next;
  }
  return head;
};
