#!/usr/bin/env node

// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst

// Solution
// ========

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) {
    return 0;
  }

  let sum = 0;

  let dfs = root => {
    if (root) {
      if (root.val >= low && root.val <= high) {
        sum += root.val;
      }

      if (low < root.val) {
        dfs(root.left);
      }

      if (high > root.val) {
        dfs(root.right);
      }
    }
  };

  dfs(root);
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
console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15)); // Output: 32
console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)); // Output: 23

// Additional Examples
// {{ADDITIONAL_EXAMPLES}}
