

class Solution(object):
    def secondLargest(nums):
    largest = nums[0]
    second = nums[0]

    for i in range(0, len(nums)):
        if nums[i] > largest:
            second = largest
            largest = nums[i]
        elif nums[i] > second & nums[i] != largest:
            second = nums[i]

    print(second)
