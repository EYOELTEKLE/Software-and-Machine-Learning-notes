const maze = (board) => 
{
    let visited = new Set();
    let ans = [];
   
    const backtrack = (r,c) => 
    {
        let b1 = 0 <= r && r < board.length;
        let b2 = 0 <=c && c < board[0].length;
        
        if(!b1 || !b2) return false;
        if(board[r][c] == 0) return false;
        if(visited.has(r+','+c)) return false;
                
        if(r == board.length - 1 && c == board[0].length - 1)
        {
          //  console.log(empty)
            //empty[r][c] = 1;
            let temp = new Array(board.length).fill().map(() => new Array(board[0].length).fill(0));
            for (let item of visited)
            {
                let [p1,p2] = item.split(',')
                p1 = Number(p1);
                p2 = Number(p2);
                temp[p1][p2] = 1
            }
            temp[board.length - 1][board[0].length - 1] = 1
            ans.push(temp)
            return ;
        }
        visited.add(r+','+c);
        backtrack(r+1,c); 
        backtrack(r,c+1);

      visited.delete(r+','+c);
    
    }
    backtrack(0,0)
    if(ans.length == 0)ans.push([])
    return ans;
}
console.log(maze([[1,0,1,0,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,0,1,1],[0,1,1,1,1]]))
/** 
 
  
 **/
