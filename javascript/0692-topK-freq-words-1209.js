// 12/8

var topKFrequent = function(words, k) {
  let map = {};

  for (let word of words) {
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }

  let sorted = Object.keys(map).sort((a, b) => {
    if (map[a] === map[b]) {
      return a > b ? 1 : -1;
    } else {
      return map[b] - map[a];
    }
  });
  return sorted.slice(0, k);
};
