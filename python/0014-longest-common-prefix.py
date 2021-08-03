class Solution(object):
    def longestCommonPrefix(self, strs):
        s = ""
        idx = 0
        if len(strs) == 0:
            return s
        mlen = len(min(strs))

        while True and idx < mlen:
            for l in strs:
                print(l)
                if strs[0][idx] != l[idx]:
                    return s
            s += strs[0][idx]
            idx += 1
        return s
        """
        :type strs: List[str]
        :rtype: str
        """
