/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
import java.util.*;

public class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        List<List<Integer>> outerArr = new ArrayList<>();
        if (root == null) return outerArr;
        q.offer(root);
        boolean reverse = false; // To keep track of whether to reverse the inner lists
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> innerArr = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                innerArr.add(node.val);
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
            if (reverse) {
                Collections.reverse(innerArr); // Reverse the inner list
            }
            outerArr.add(innerArr);
            reverse = !reverse; // Toggle the reverse flag for the next level
        }
        return outerArr;
    }
}
