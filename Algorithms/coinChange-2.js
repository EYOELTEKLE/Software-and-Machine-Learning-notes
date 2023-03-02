var change = function(amount, coins)
 {
    let dp = new Array(coins.length+1).fill().map(() => new Array(amount+1).fill(-1));
    for (let r =0 ; r < dp.length; r++)
    {
        dp[r][0] = 1
    }
      for (let c =1 ; c < dp[0].length; c++)
    {
        dp[0][c] = 0
    }
    for (let r = 1; r < dp.length; r++)
    {
        for (let c = 1; c < dp[0].length; c++)
        {
            if(coins[r-1] > c)
            {
                dp[r][c] = dp[r-1][c]
            }
            else
            {
                dp[r][c] = dp[r-1][c] + dp[r][c - coins[r-1]]
            }
        }
    }
    return dp[coins.length][amount]
};
