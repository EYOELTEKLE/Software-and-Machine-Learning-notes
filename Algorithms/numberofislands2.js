function numIslands2(n, m, operators) {
    // write your code here
    const grid = new Array(n).fill().map( item => new Array(m).fill(0));
    
    const helper = () => 
    {
      const visited = new Set();
      let count = 0;
      const dfs = (r,c) => 
      {
        let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;
        if(!b1 || !b2)return false;
        if(grid[r][c] == 0) return false;
        if(visited.has(r+','+c)) return false;

        visited.add(r+','+c);

        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
        return true;
      }
      for (let r = 0; r < grid.length; r++)
      {
        for (let c = 0; c < grid[0].length;c++)
        {
          let ans = dfs(r,c);
          if(ans)count++
        }
      }
      return count
    }
    for (let i = 0; i < operators.length; i++)
    {
      const [r,c] = operators[i];
      grid[r][c] = 1;
      let eval = helper();
      operators[i] = eval;
    }
    return operators;

  }
