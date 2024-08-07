# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        arr = []
        q = deque([root])

        while q:
            innerArr =[]
            for i in range(len(q)):
                node = q.popleft()
                innerArr.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            
        arr.append(innerArr)
        print(arr)
        return arr[-1][0]
            