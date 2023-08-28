var generateMatrix = function(n) {
   const grid = new Array(n).fill().map(() => new Array(n).fill(-1));
    let count = 1;
    const dfs = (r,c,notifier = false) => 
    {
        let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;
        if(!b1 || !b2) return false;
        if(grid[r][c] != -1) return false;
        grid[r][c] = count;
        count += 1;
        if(notifier)dfs(r-1,c,true)
        dfs(r,c+1,false)
        dfs(r+1,c,false)
        dfs(r,c-1,false)
        dfs(r-1,c,true)  
    }
    dfs(0,0)
    return grid;
};
