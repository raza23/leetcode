class Solution(object):
      def deleteDuplicates(self, head):

           if not head or not head.next:
                return head
            current = head

            while current and current.next:
                if current.val == current.next.val:
                    current.next = current.next.next
                else:
                    current = current.next

            return head
