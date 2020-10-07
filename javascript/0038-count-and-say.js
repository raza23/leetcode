// 10.7

var countAndSay = function(n) {
  let finalString = "1";
  if (n === 1) return finalString;

  let charPointer = 0;
  let countPointer = 0;
  let string = "";

  while (n > 1) {
    while (countPointer < finalString.length) {
      while (
        finalString.charAt(charPointer) === finalString.charAt(countPointer)
      ) {
        countPointer++;
      }

      string += (countPointer - charPointer).toString();
      string += finalString.charAt(charPointer);
      charPointer = countPointer;
    }
    finalString = string;
    string = "";
    charPointer = 0;
    countPointer = 0;
    n--;
  }
  return finalString;
};
