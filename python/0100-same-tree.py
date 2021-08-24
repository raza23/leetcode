class Solution(object):
    def isSameTree(self, p, q):
        if p == None or q == None:
            return p == q
        if p.val != q.val:
            return False

        return self.isSameTree(p.right, q.right) and self.isSameTree(p.left, q.left)
