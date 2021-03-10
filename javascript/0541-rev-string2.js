// 11/22

var reverseStr = function(s, k) {
  let temp = "";
  let res = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    temp = s.substr(i, 2 * k);
    if (temp.length < k) {
      res = res + reverseString(temp);
    } else {
      res = res + reverseString(temp.substr(0, k)) + temp.substr(k);
    }
  }
  return res;
};

function reverseString(str) {
  let arr = str.split("");
  return arr.reverse().join("");
}
