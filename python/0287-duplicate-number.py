class Solution(object):
    def findDuplicate(self, nums):
        p1 = nums[0]
        p2 = nums[0]
        p1 = nums[p1]
        p2 = nums[nums[p2]]
        print p1
        print p2
        
        while p1 != p2:
            p1 = nums[p1]
            p2 = nums[nums[p2]]
        
        p1 = nums[0]
        
        while p1 != p2:
            p1 = nums[p1]
            p2 = nums[p2]
        
        return p1
        """