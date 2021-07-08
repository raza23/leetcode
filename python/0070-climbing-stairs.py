class Solution(object):
    def climbStairs(self, n):

        if n == 1:
            return 1
        elif n == 2:
            return 2
        prev = 1
        curr = 2
        for i in range(2, n):
            print(i)
            temp = curr
            curr = prev + curr
            prev = temp
        return curr
