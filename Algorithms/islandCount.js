/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid)
{
    let visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[0].length; c++)
        {
            ans = explore(grid,r,c,visited);
            if (ans) count++;
        }
    }    
    return count;
};
/**
upper Bound and lower bound for the Graph


**/
const explore = (grid,r,c,visited) => 
{
    let u = 0 <= r &&   r < grid.length;
    let l = 0 <= c &&  c < grid[0].length;
    
    if (!u || !l) return false;
    if (grid[r][c] === "0") return false;
    if (visited.has(r+','+c)) return false;
    
    visited.add(r +',' +c);
    explore(grid,r-1,c,visited);
    explore(grid,r+1,c,visited)
    explore(grid,r,c-1,visited);
    explore(grid,r,c+1,visited);
    return true;
    
}
