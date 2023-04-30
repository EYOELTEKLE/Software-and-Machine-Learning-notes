/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
const dp = new Array(text1.length+1).fill().map(() => new Array(text2.length+1).fill(0));
  text1 = " "+text1;
  text2 = " "+text2;

  for  (let i = 0; i < dp.length; i++)dp[0][i] = 0;
    for  (let i = 0; i < dp.length; i++)dp[i][0] = 0;
  for (let i = 1; i < dp.length; i++)
  {
    for (let j = 1; j < dp[0].length; j++)
    {
      if(text1[i] != text2[j])
      {
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
      }
      else
      {
        dp[i][j] = 1 + dp[i-1][j-1]
      }
    }
  }

return dp[dp.length-1][dp[0].length-1];
};
