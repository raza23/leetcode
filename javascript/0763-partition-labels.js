var partitionLabels = function(s) {
  let output = [];
  let dict = {};
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    dict[s[j]] = j;
  }

  while (i < s.length) {
    let last = dict[s[i]];

    let k = i;

    while (k < last) {
      let nextLast = dict[s[k]];

      if (nextLast > last) {
        last = nextLast;
      }

      k++;
    }

    output.push(k - i + 1);

    i = k + 1;
  }
  return output;
};

// https://leetcode.com/problems/partition-labels/
