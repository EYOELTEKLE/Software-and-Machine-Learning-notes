var minDistance = function(word1, word2) {

  const dp = new Array(word2.length+1).fill().map(() => new Array(word1.length+1).fill(0));
    word1 = " "+word1;
    word2 = " "+word2;

  for (let j = 1; j < dp[0].length; j++)
  {
      dp[0][j] = j;
  }
   for (let i = 1; i < dp.length; i++)
  {
      dp[i][0] = i;
  }

    for (let i = 1; i < dp.length; i++)
    {
        for (let j = 1; j < dp[0].length; j++)
        {
            if(word2[i] != word1[j])
            {
                let min = Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1]);
                dp[i][j] = 1 + min;
            }
            else
            {
                dp[i][j] = dp[i-1][j-1]
            }
        }
    }
 return dp[dp.length-1][dp[0].length-1];
 
    
};
