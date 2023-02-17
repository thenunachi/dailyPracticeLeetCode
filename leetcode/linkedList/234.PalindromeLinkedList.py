def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # converting to array
        arr =[]
        while head:
            arr.append(head.val)
            head = head.next
        l=0
        r = len(arr)-1
        while l<=r:
            if arr[l] !=arr[r]:
                return False
            else:
                l+=1
                r-=1
        return True