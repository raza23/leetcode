var titleToNumber = function(s) {
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    //         65 is UTF-16 of 'A'
    x = s.charCodeAt(i) - 65 + 1;
    r = r * 26 + x;
  }
  return r;
};
