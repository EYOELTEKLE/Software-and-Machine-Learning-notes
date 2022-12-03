
 function wallsAndGates(rooms) {
    // write your code here

    let row = rooms.length;
    let col = rooms[0].length;
   
    for (let r = 0; r < row; r++)
    {
      for (let c = 0; c < col; c++)
      {
        if (rooms[r][c] == 0)
        {
          dfs(r,c,0,rooms)
        }
      }
    }
  }

const dfs = (r,c,count,rooms) => 
{
    let bound1 = 0 <= r &&  r < rooms.length;
    let bound2 = 0 <= c && c < rooms[0].length;
    if(!bound1 || !bound2) return;
    if(rooms[r][c] == -1) return;
    if(count > rooms[r][c]) return;
    rooms[r][c] = count;
    dfs(r+1,c,count+1,rooms)
    dfs(r,c+1,count+1,rooms)
    dfs(r-1,c,count+1,rooms)
    dfs(r,c-1,count+1,rooms)
}
