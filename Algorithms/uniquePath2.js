/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * top down using memoization
 
 */
var uniquePathsWithObstacles = function(obstacleGrid)
{

    let ans = explore(obstacleGrid,0,0)
    return ans;
};

const explore = (grid,r,c,mem={}) => 
{
    let position = r + ',' +c;
    if (position in mem) return mem[position]
    if (r >= grid.length || c >= grid[0].length) return 0;
    if(grid[r][c] == 1) return 0;
    if(r == grid.length - 1 && c == grid[0].length - 1) return 1;
    
    mem[position] = explore(grid,r+1,c,mem) + explore(grid,r,c+1,mem);
    return mem[position];
}
