class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        root = ListNode(0)
        result = root
        carryover = 0
        while l1 or l2 or carryover:
            if l1:
                carryover += l1.val
                l1 = l1.next
            if l2:
                carryover += l2.val
                l2 = l2.next

            result.next = ListNode(carryover % 10)
            result = result.next
            carryover = carryover//10

        return root.next
