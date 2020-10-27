var twoSum = function(numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  let result = [];

  while (p1 < p2) {
    let leftnum = numbers[p1];
    let rightnum = numbers[p2];

    if (leftnum + rightnum === target) {
      result.push(p1 + 1);
      result.push(p2 + 1);
      break;
    } else if (leftnum + rightnum > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return result;
};
