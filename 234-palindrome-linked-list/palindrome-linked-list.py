# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow,fast =head,head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        prev = None
        
        while slow:
            tmp = slow.next
            slow.next = prev
            prev=slow
            slow = tmp
        first = head
        second = prev
        while second:
            if first.val != second.val:
                return False
            else:
                first = first.next
                second = second.next
        return True
