// Day 10
// 10.6

var mergeTwoLists = function(l1, l2) {
  let falsey = new ListNode(-1);
  let head = falsey;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      falsey.next = l1;
      l1 = l1.next;
    } else {
      falsey.next = l2;
      l2 = l2.next;
    }

    falsey = falsey.next;
  }
  if (l1 !== null) {
    falsey.next = l1;
  } else {
    falsey.next = l2;
  }

  return head.next;
};

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
