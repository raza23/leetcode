def runningSum(self, nums):
    res = [nums[0]]
    j = 0

    for i in range(1, len(nums)):
        res.append(nums[i] + res[j])
        j += 1
    return res
