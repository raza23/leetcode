def lengthOfLastWord(self, s):
    i = len(s) - 1
    l_word = 0

    while s[i] == " ":
        i -= 1
    while i >= 0 and s[i] != " ":
        l_word += 1
        i -= 1
    return l_word
