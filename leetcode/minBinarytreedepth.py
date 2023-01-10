# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root):
        if not root:
            return 0
        queue=[(root,1)]
        depth=0
        while queue:
            node,level = queue.pop(0)
            depth = min(depth,level)
            # if not node.left and not node.right :
            #     return depth
            if node.left:
                queue.append((node.left , level+1))
            if node.right:
                queue.append((node.right , level+1))
        return depth