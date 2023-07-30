var isGood = function(nums) {
    let base = nums.sort((a,b) => a - b);
    const dp = new Array(nums.length).fill(0);
    dp[dp.length-1] = dp.length - 1;
    dp[dp.length-2] = dp.length - 1;
    for(let i = dp.length-3; i >= 0; i--)
       {
            dp[i] = dp[i+1]-1;   
       }
    for (let i = 0; i < dp.length; i++)
    {
        if(nums[i] != dp[i]) return false
    }
    return true;

    
};
