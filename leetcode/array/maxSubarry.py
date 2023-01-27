def maxSubArray( nums) -> int:
        maxSub = nums[0]
        currSum = 0
        for n in nums:
            if currSum < 0:
                currSum = 0
            currSum+=n
            maxSub = max(maxSub,currSum)
        return maxSub
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([-2,-1,-3,-4,-1,-2,-1,-5,-4]))
print(maxSubArray([-2,-1,-3,-4,-1,-2,-1,-5,4]))
