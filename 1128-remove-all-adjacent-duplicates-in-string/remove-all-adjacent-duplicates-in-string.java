class Solution {
    public String removeDuplicates(String s) {
        Stack<Character>stack = new Stack<>();
        for(int i=0;i<s.length();i++){
            
            if(!stack.isEmpty() && stack.peek()== s.charAt(i)){
               stack.pop();
            }
            else{
                
             stack.push(s.charAt(i));
            }

   
        }
       StringBuilder result = new StringBuilder();
        
        while (!stack.isEmpty()) {
            result.insert(0, stack.pop()); // Insert at the beginning to maintain original order
        }
        
        return result.toString();
    }
}

// import java.util.Stack;

// class Solution {
//     public String removeDuplicates(String s) {
//         Stack<Character> stack = new Stack<>();
        
//         for (int i = 0; i < s.length(); i++) {
//             if (!stack.isEmpty() && stack.peek() == s.charAt(i)) {
//                 stack.pop();
//             } else {
//                 stack.push(s.charAt(i));
//             }
//         }
        
//         // Create a StringBuilder to efficiently build the result string
//         StringBuilder result = new StringBuilder();
        
//         while (!stack.isEmpty()) {
//             result.insert(0, stack.pop()); // Insert at the beginning to maintain original order
//         }
        
//         return result.toString();
//     }
// }
