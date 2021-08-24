class Solution(object):
    def isSymmetric(self, root):
        if root == None:
            return True
        return self.isMirror(root.left, root.right)

    def isMirror(self, t1, t2):
        if t1 == None or t2 == None:
            return t1 == t2

        if t1.val != t2.val:
            return False

        return self.isMirror(t1.left, t2.right) and self.isMirror(t1.right, t2.left)
