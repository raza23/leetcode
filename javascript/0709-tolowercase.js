var toLowerCase = function(str) {
  var lower = "";
  for (let s of str) {
    console.log(s.toLowerCase());
    lower += s.toLowerCase();
  }
  return lower;
};
