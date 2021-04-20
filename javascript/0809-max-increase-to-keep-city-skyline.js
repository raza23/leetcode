#!/usr/bin/env node

// 807. Max Increase to Keep City Skyline
// https://leetcode.com/problems/max-increase-to-keep-city-skyline

// Solution
// ========
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let rows = [];
  let cols = [];

  for (let row = 0; row < grid.length; row++) {
    let rowMax = rows[row] | 0;
    for (let col = 0; col < grid[0].length; col++) {
      const item = grid[row][col];

      cols[col] = cols[col] | 0;

      if (item > rowMax) {
        rowMax = item;
      }
      if (item > cols[col]) {
        cols[col] = item;
      }
    }
    rows[row] = rowMax;
  }

  let sum = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const item = grid[row][col];
      sum += Math.min(rows[row], cols[col]) - item;
    }
  }
  return sum;
};

// Time and Space Complexity
// =========================
// Time Complexity: O(__REPLACE_ME__)
// Space Complexity: O(__REPLACE_ME__)

// Tests
// =====
//
// LeetCode Examples
console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
  ])
); // Output: 35

// Additional Examples
// {{ADDITIONAL_EXAMPLES}}
