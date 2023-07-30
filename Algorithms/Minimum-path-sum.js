/**
 * @param {number[][]} grid
 * @return {number}
 */
 /** optimal solution
 Time Complexity - O(r*c)
 Space Complexity - O(r*c)
 **/
var minPathSum = function(grid) {
    const dp = new Array(grid.length+1).fill().map(() => new Array(grid[0].length+1).fill(Infinity))
    dp[1][1] = grid[0][0];
    for (let r = 1; r < dp.length; r++)
    {
        for (let c = 1; c < dp[0].length; c++)
        {
            if(r==1 && c==1)continue;
            dp[r][c] = Math.min(grid[r-1][c-1] + dp[r-1][c],grid[r-1][c-1]+dp[r][c-1])
        }
    }
    return dp[grid.length][grid[0].length];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    //bad solution using backtracking
 const set = new Set();
    let min = Infinity;
  const dfs = (r,c) => 
  {
      let b1 = 0 <= c && c < grid[0].length;
      let b2 = 0 <= r && r < grid.length 
      if(!b1 || !b2) return false;
      if(r == grid.length - 1 && c == grid[0].length- 1)
      {
          set.add(r+','+c);
          let sum = 0;
          for (let item of set)
          {
              let temp = item.split(",")
              const [p1,p2] = temp;
              sum  += grid[Number(p1)][Number(p2)] 
          }
          min = Math.min(sum,min);
      }
        set.add(r+','+c)
        dfs(r+1,c)
        dfs(r,c+1)  
        set.delete(r+','+c)
}
    dfs(0,0)
    return min;
};
