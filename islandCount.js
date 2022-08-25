/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[r].length;c++)
        {
            if (grid[r][c] == "1")
            {
               let ans =  explore(grid,r,c,visited);
                if (ans)
                {
                    count++;
                }
            }
        }
    }
    return count;
};

const explore = (grid,r,c,visited) => 
{
    const rowBounds = 0 <= r && r < grid.length;
    let temp;
    try
    {
       temp = grid[r].length; 
    }                                                                     //we have to check if columns length > rows length using try catch because js throws an error
    catch(e)
    {
    temp = grid.length
    }
    const colBounds = 0 <= c && c < temp  ;
    const position = r+','+c;

    if (!rowBounds || !colBounds) return false;

    if (grid[r][c] == "0") return false;
    if (visited.has(position)) return false;
    visited.add(position);
    explore(grid,r - 1,c,visited);
    explore(grid,r + 1,c,visited);
    explore(grid,r,c - 1,visited);
    explore(grid,r,c + 1,visited);
 
    return true;
}
