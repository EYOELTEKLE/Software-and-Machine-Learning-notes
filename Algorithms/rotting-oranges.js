/**
 * @param {number[][]} grid
 * @return {number}
 
 
Time complexity -> O(r*c)
Space complexity -> O(r*c)
 */


const safe = (x,y,grid) => 
{
    //checks if grid is safe
    let b1 = 0 <= x && x < grid.length;
    let b2 = 0 <= y && y < grid[0].length;
    
   return !b1 || !b2 ? false : true;
}

var orangesRotting = function(grid) {
    let r = grid.length;
    let c = grid[0].length;
    let queue = [];
    for (let i = 0; i < r; i++)
    {
        for (let j = 0; j <c; j++)
        {
            let pos = ""+i+j;
    
            if(grid[i][j] == 2)queue.push([pos,0])//put the rotten orange to the queue with timer
        }
    }
   
    if(queue.length == 0) //check if there are no rotten oranges
    {
        for (let i = 0; i < grid.length; i++)
        {
            for (let j = 0; j < grid[0].length; j++)
            {
                if(grid[i][j] == 1) return -1;  //if there is a fresh orange then return -1
               
            }
        }
        return 0;  //if there is nothing but empty spaces return 0
    }
    while(queue.length > 0)
    {
        
        let current = queue.shift();
        
       
        let [x,y] = current[0].split('');
      
        x = parseInt(x);
        y = parseInt(y);
        
        var timer = current[1];
 
        let rowBack = safe(x-1,y,grid)
        let rowUp = safe(x+1,y,grid)
        let colBack = safe(x,y-1,grid)
        let colUp = safe(x,y+1,grid)
        if(rowBack && grid[x-1][y] == 1) 
      {queue.push([""+(x-1)+y,timer+1]);grid[x-1][y] = 2;}
        if(rowUp && grid[x+1][y] == 1)
        { queue.push([""+(x+1)+y,timer+1]);grid[x+1][y] = 2;}
        if(colBack && grid[x][y-1] == 1)
        {queue.push([""+x+(y-1),timer+1]);grid[x][y-1] = 2;}
        if(colUp && grid[x][y+1] == 1)
        { queue.push([""+x+(y+1),timer+1]);grid[x][y+1] = 2;}
        
    }
    let edge = false//flag to check if there is at least one isolated fresh orange
    grid.forEach(item => item.forEach(i => {if(i == 1) edge = true}))
    if(edge == true) return -1;
    return timer;
};
