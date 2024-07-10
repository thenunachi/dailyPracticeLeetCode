class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        def match(w,p):
            smap = [0]*128 
            tmap = [0]*128
           
            for index,(charS,charT) in enumerate(zip(w,p),1):
                if smap[ord(charS)] != tmap[ord(charT)]:
                    return False
                smap[ord(charS)] = tmap[ord(charT)]= index
            return True
        




        return [word for word in words if match(word,pattern)]