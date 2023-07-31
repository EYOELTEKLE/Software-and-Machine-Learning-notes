/**

Intuition
Isolate the island components(because of the requirement) connected to the edge of the grid by traversing from the edge and flip the island cells to F
Afterwards use dfs to traverse the only real islands by returing true from the dfs recursive function calls and increment count
Complexity
Time complexity:O(r∗c)
Space complexity:O(r∗c)O

**/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let  visited = new Set();
    let closed = 0;
    const isolate = (r,c) => 
    {
        let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;

        if(!b1 || !b2) return  false;
        if(visited.has(r+','+c)) return false;

        visited.add(r+','+c)

        if(grid[r][c] == "1") return false;

        grid[r][c] = "F";

        isolate(r+1,c)
        isolate(r-1,c)
        isolate(r,c+1)
        isolate(r,c-1)
    }
    for (let r = 0; r < grid.length; r++)
    {
        for (let c = 0; c < grid[0].length; c++)
        {
            if(r == 0 || c == 0 || r == grid.length - 1 || c == grid[0].length - 1)
            {
                    isolate(r,c);
            }
        }
    }
    visited = new Set();
    const dfs = (r,c) => 
    {
         let b1 = 0 <= r && r < grid.length;
        let b2 = 0 <= c && c < grid[0].length;

        if(!b1 || !b2) return  false;
        if(visited.has(r+','+c)) return false;
        if(grid[r][c] == "F" || grid[r][c] == "1") return false;
        visited.add(r+','+c) 

        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
        return true;
    }
  for (let r = 0; r < grid.length; r++)
  {
      for (let c = 0 ; c < grid[0].length;c++)
      {
          let ans = dfs(r,c);
          if(ans) closed++
      }
  }
  return closed;
};
