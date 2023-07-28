var canPartition = function(nums) {
  let sum = 0;
  nums.map(i => {sum += i});
  let target = sum / 2;
  if(target % 1) return false;
  const dp = new Array(nums.length+1).fill().map(() => new Array(target+1).fill(false));
  dp[0][0] = true;
  for (let r = 1; r < dp.length; r++)
  {
      for (let c = 1; c < dp[0].length;c++)
      {
        if(c-nums[r-1] >= 0)
        {
        dp[r][c] =  dp[r-1][c-nums[r-1]]
        }
          dp[r][c] = dp[r-1][c] ||dp[r][c]
      }
  }
  return dp[nums.length][target];
};
