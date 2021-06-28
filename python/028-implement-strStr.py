class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if needle == "":
            return 0
        n = len(needle)
        m = len(haystack)
        if m < n:
            return -1
        else:
            for i in range(m-n+1):
                print(range(m-n+1))
                if haystack[i:i+n] == needle:
                    return i
            return -1
