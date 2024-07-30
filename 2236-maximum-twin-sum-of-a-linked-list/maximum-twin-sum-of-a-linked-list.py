# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        res =0
        prev = None
        slow,fast = head,head
        while fast and fast.next:
            fast =fast.next.next
            tmp =slow.next
            slow.next =prev
            prev =slow
            slow =tmp
        
        
        while slow:
            res = max(res,slow.val+prev.val)
            prev =prev.next
            slow =slow.next
        return res