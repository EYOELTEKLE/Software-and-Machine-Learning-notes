/**
 * @param {number[][]} grid
 * @return {number}
 */
/**

Time Complexity - O(row * col)
Space Complexity - O(row * col)
use set to keep track of visited nodes


**/
var maxAreaOfIsland = function(grid) {
    
    const visited = new Set();
    let max = 0;
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[0].length; c++)
        {
            const ans = explore(grid,r,c,visited);
            if (ans != 0)
            {
                if (max == 0 || max < ans) max = ans;
            }
        }
    }
    return max;
};

const explore = (grid,r,c,visited) => 
{
    let rI = 0 <= r && r < grid.length;//bound checking for row 
    let cI = 0 <= c && c < grid[0].length;//bound checking for column
    let position = r + ',' + c;
    if (!rI || !cI) return 0;
    if (visited.has(position)) return 0;
    if (grid[r][c] === 0) return 0;
    
    visited.add(position);
    let size = 1
    size += explore(grid,r-1,c,visited)
    size += explore(grid,r+1,c,visited)
    size += explore(grid, r, c - 1, visited)
    size += explore(grid, r, c + 1, visited)
    return size;
}
