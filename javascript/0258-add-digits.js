// 10/22

var addDigits = function(num) {
  let currSum = 0;

  while (num > 9) {
    const stringNum = num.toString();

    for (const digit of stringNum) {
      currSum += parseInt(digit);
    }

    num = currSum;
    currSum = 0;
  }

  return num;
};
