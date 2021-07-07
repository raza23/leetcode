class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        current = nums[0]
        global_num = nums[0]

        for i in range(1, len(nums)):
            current = max(nums[i], current + nums[i])
            if current > global_num:
                global_num = current

        return global_num
