var longestWord = function(words) {
  if (!words || words.length == 0) return "";
  let res = "";
  let set = new Set(); //store valid word
  words.sort(); //sort string

  for (let word of words) {
    let prev = word.substring(0, word.length - 1);

    if (word.length === 1 || set.has(prev)) {
      res = word.length > res.length ? word : res;

      set.add(word);
    }
  }
  return res;
};
