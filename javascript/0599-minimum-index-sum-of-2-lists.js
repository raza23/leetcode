var findRestaurant = function(list1, list2) {
  let map = new Map();
  let minTracker = list1.length + list2.length;
  for (let i = 0; i < list1.length; i++) {
    if (list2.indexOf(list1[i]) > -1) {
      let indL2 = list2.indexOf(list1[i]);
      if (indL2 + i < minTracker) {
        minTracker = indL2 + i;
        map.set(minTracker, [list1[i]]);
      } else if (indL2 + i == minTracker) {
        let newArr = map.get(minTracker);
        newArr.push(list1[i]);
        map.set(minTracker, newArr);
      }
    }
  }
  return map.get(minTracker);
};
