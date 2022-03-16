class Solution(object):
    def validateStackSequences(self, pushed, popped):
        stack = []
        n = len(popped)
        i = 0
        
        for p in pushed:
            stack.append(p)
            while stack and i < n and stack[-1] == popped[i]:
                print stack
                i += 1
                stack.pop()
        
        return stack == []