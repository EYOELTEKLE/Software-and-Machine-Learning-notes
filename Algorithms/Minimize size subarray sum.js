var minSubArrayLen = function(target, nums) {
    let left = 0;
    let total = 0
    let result = Infinity;
    for(let right = 0; right < nums.length; right++)
    {
        total += nums[right];
        while(total >= target)
        {
            total = total - nums[left];
            result = Math.min(result,right-left+1)
            left++;
        }
    }
    return result == Infinity ? 0 : result
};
