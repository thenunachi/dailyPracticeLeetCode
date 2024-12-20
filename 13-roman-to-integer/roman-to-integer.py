class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        map = {
            "I" : 1,
            "V" : 5,
            "X"  :  10,
            "L"  :  50,
            "C"  :  100,
            "D"   : 500,
            "M"  :1000
        }
        si = 0
        for i in range(len(s)):
            if i+1 < len(s) and map [s[i]] < map[s[i+1]]:
                si -=map[s[i]]
            else:
                si += map[s[i]]
        return si
            