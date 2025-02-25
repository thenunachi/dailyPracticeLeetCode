class Solution(object):
    def numRescueBoats(self, people, limit):
        """
        :type people: List[int]
        :type limit: int
        :rtype: int
        """
    
        people.sort()  # Sort first!
        l = 0
        r = len(people) - 1
        boats = 0
        
        while l <= r:
            if people[l] + people[r] <= limit:
                l += 1
            r -= 1
            boats += 1
        
        return boats

# time complexity of O(n log n)