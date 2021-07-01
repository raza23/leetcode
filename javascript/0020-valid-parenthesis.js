function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      console.log(stack);
    } else if (map[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length ? 0 : 1;
}
