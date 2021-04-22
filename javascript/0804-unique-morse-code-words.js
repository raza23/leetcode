#!/usr/bin/env node

// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words

// Solution
// ========
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let morseSet = new Set();
  let morse = "";

  function decypher(elem) {
    var code = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--.."
    };
    return code[elem];
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      morse += decypher(words[i][j]);
      console.log(morse);
    }

    morseSet.add(morse);

    morse = "";
  }

  return morseSet.size;
};

// Time and Space Complexity
// =========================
// Time Complexity: O(__REPLACE_ME__)
// Space Complexity: O(__REPLACE_ME__)

// Tests
// =====
//
// LeetCode Examples
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // Output: 2

// Additional Examples
// {{ADDITIONAL_EXAMPLES}}
