/**
 * @param {number[][]} grid
 * @return {number}
 */
 /** 
 isolate connected from  the edge and do normal dfs
 **/
var numEnclaves = function(grid) {

    let visited = new Set();
    let enclaves = 0;

    const isolate = (r,c) => 
    {
        let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;
        if(!b1 || !b2) return false;
        if(grid[r][c] == "0")return false;
        if(visited.has(r+','+c))return false;

        visited.add(r+','+c);
        grid[r][c] = "F";

        isolate(r+1,c);
        isolate(r-1,c);
        isolate(r,c+1);
        isolate(r,c-1);
    }
    for(let r = 0; r < grid.length;r++)
    {
        for(let c = 0; c < grid[0].length;c++)
        {
            if(r == 0 || c == 0 || r == grid.length - 1 || c == grid[0].length - 1)isolate(r,c)
            
        }
    }
    visited = new Set();

    const dfs = (r,c) =>
    {
        let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;
        if(!b1 || !b2) return false;
        if(grid[r][c] == "0" || grid[r][c] == "F")return false;
        if(visited.has(r+','+c))return false;

        visited.add(r+','+c);
        enclaves++;
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[0].length; c++)
        {
            dfs(r,c)
        }
    }
    return enclaves;
};

