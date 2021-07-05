class Solution:
    def isValid(self, s):
        stack = []
        hash_map = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        for char in s:
            if len(stack) == 0:
                stack.append(char)
            else:
                element = stack[-1]
                print(element)
                print(char)
                if char in hash_map and hash_map[char] == element:
                    stack.pop()
                else:
                    stack.append(char)

        return len(stack) == 0
