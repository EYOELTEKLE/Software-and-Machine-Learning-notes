/**
 * @param {number[][]} heights
 * @return {number[][]}
 
 time-complexity - O(n*m)
 space-complexity - O(n*m)
 */
var pacificAtlantic = function(heights) 
{
    let row = heights.length;
    let col = heights[0].length;
    let pacific = new Set();
    let atlantic = new Set();
    let sol = [];
    
    
    //traverse the top and bottom grid(pacific,atlantic)
    for (let c = 0; c < col; c++)
    {
        dfs(0,c,heights[0][c],pacific,heights)
        dfs(row-1,c,heights[row-1][c],atlantic,heights)
        
    }
    // traverse the first column and last column grid(pacific,atlantic)
     for (let r = 0; r < row; r++)
    {
        dfs(r,0,heights[r][0],pacific,heights)
        dfs(r,col-1,heights[r][col-1],atlantic,heights)
        
    }
    for (let i = 0; i < row; i++)
    {
        for (let j = 0; j < col; j++)
        {
            if(pacific.has(i+','+j) && atlantic.has(i+','+j)) sol.push([i,j])
        }
    }
    return sol
    
};
const dfs = (r,c,prev,visited,grid) => 
{
    let bound1 = 0 <= r && r < grid.length;
    let bound2 = 0 <= c && c < grid[0].length;
    if(!bound1 || !bound2) return;
    if(visited.has(r+','+c))return;
  
    if(prev > grid[r][c]) return;
        
    visited.add(r+","+c);
    dfs(r+1,c,grid[r][c],visited,grid)
    dfs(r-1,c,grid[r][c],visited,grid)
    dfs(r,c+1,grid[r][c],visited,grid)
    dfs(r,c-1,grid[r][c],visited,grid)
    
    
}
