#Code
/**
 * @param {number} n
 * @return {number}
 */
//Top Down
var tribonacci = function(n,mem={}) {
    if(n in mem)return mem[n]
    if(n == 0) return 0;
  if(n < 3) return 1;
  mem[n] =  tribonacci(n-3,mem) + tribonacci(n-2,mem) + tribonacci(n-1,mem); 
  return mem[n]
};
//bottom up
var tribonacci = function(n){
 const dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i < dp.length; i++)
    {
        dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
    }
return dp[n]
}
