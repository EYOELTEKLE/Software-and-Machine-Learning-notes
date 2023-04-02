/**
Time Complexity - O(N^2)
Space Complexity - O(N)

**/
var lengthOfLIS = function(arr) {
    const dp = new Array(arr.length).fill(1);  
    for (let i = 1; i < arr.length; i++)
        {
            let j = 0;
        
            while(j < i)
            {
                if(arr[i] > arr[j] && dp[j] >= dp[i])
                {
                    dp[i] = 1 + dp[j]
                }
                j++;
            }
        }
        let max = -Infinity;
        for (let vals of dp)
        {
            if(vals > max) max = vals
        }
    return max;
};
