 def removeDuplicates(self, nums):
      l = 0
       for j in range(1, len(nums)):
            if nums[j] != nums[l]:
                l += 1
                nums[l] = nums[j]

        return l + 1
