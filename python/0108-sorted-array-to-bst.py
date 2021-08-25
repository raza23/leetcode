class Solution(object):
    def sortedArrayToBST(self, nums):

        def helper(l, r):
            if l > r:
                return None

            m = (l + r) // 2
            # print m
            root = TreeNode(nums[m])
            root.left = helper(l, m-1)
            print root.left
            root.right = helper(m+1, r)

            return root

        return helper(0, len(nums)-1)
