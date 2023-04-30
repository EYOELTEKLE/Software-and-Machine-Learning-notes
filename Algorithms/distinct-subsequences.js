var numDistinct = function(s, t) {
  s = " "+s;
  t = " "+t;
  let dp = new Array(t.length+1).fill().map(() => new Array(s.length+1).fill(null));
    dp[0][0] = 1;
  for(let i = 1; i < dp[0].length; i++)
  {
    dp[0][i] = 1;
  }
  for(let i = 1; i < dp.length; i++)
  {
    dp[i][0] = 0;
  }

 for (let i = 1; i < dp.length; i++)
 {
     for (let j = 1; j < dp[0].length; j++)
     {
         if(s[j] != t[i])
         {
             dp[i][j] = dp[i][j-1]
         }
         else
         {
             dp[i][j] = dp[i][j-1]+dp[i-1][j-1]
         }
     }
 }
    return dp[dp.length-1][dp[0].length-1];
};
