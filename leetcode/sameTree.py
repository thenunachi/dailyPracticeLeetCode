# // bfs
# // iterative
# //queue
# //level by level

# // Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# // Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

# // Example 1:


# // Input: p = [1,2,3], q = [1,2,3]
# // Output: true
# // Example 2:


# // Input: p = [1,2], q = [1,null,2]
# // Output: false
# // Example 3:


# // Input: p = [1,2,1], q = [1,1,2]
# // Output: false
 

# // Constraints:

# // The number of nodes in both trees is in the range [0, 100].
# // -104 <= Node.val <= 104



def isSameTree(self, p, q):
    # both  are none(null) True
    #  either one none means False
    # values are not same False
    # Why it follows dFS???

    if not p and not q:
        return True
    if not p or not q :
        return False
    if p.val != q.val:
        return False
    return((self.isSameTree(p.right,q.right))and (self.isSameTree(p.left,q.left)))
       
    
  

