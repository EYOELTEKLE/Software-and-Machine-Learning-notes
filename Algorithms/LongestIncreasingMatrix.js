var longestIncreasingPath = function(matrix) {
    let dp = {};

    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[0].length;j++)
        {
            dfs(i,j,matrix,-1,dp)
        }
    }
    let vals = Object.values(dp);
    let max= -Infinity;
    for (let item of vals)
    {
        if(item > max)max = item;
    }
    return max;
    
};

const dfs = (r,c,matrix,prev,dp) => 
{
    
    let b1 = 0 <=r && r < matrix.length;
    let b2 = 0 <=c && c < matrix[0].length;


    if(!b1 || ! b2)return 0;
    if(matrix[r][c] <= prev) return 0;

    if((r+','+c) in dp)return dp[r+','+c]

    let res = 1

    
    res = Math.max(res,1 + dfs(r+1,c,matrix,matrix[r][c],dp))
    res = Math.max(res,1  +dfs(r-1,c,matrix,matrix[r][c],dp))
    res = Math.max(res,1 + dfs(r,c+1,matrix,matrix[r][c],dp))
    res = Math.max(res,1 + dfs(r,c-1,matrix,matrix[r][c],dp))
    dp[r+','+c] = res
    return res
  
   
}
