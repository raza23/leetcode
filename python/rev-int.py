class Solution:
    def reverse(self, x):
        if x == 0:
            return 0
        flag = False
        if x < 0:
            flag = True
            x = -x

        cur = 0
        while x > 0:
            r = x % 10
            # x //= 10
            print x
            cur = cur * 10 + r

        if cur > 2 ** 31 - 1:
            return 0

        if flag:
            return -cur

        return cur
