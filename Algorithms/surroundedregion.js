/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead. 

//capture the unflippable region using dfs and change its region to temporary flag T
//whenever a flag is seen while traversing we return so as to avoid  a cycle in the dfs

// traverse the Matrix using loops change the flippable region to X


// after that flip the unflippable region flag back to zero

 
 
 
 
 0
: 
(6) ['X', 'O', 'X', 'O', 'X', 'O']
1
: 
(6) ['O', 'X', 'X', 'X', 'X', 'X']
2
: 
(6) ['X', 'X', 'X', 'X', 'X', 'O']
3
: 
(6) ['O', 'X', 'O', 'X', 'O', 'X']
**/

var solve = function(board)
{
   let r = board.length;
   let c = board[0].length;
    
    
 //capture the isolated region
  for (let i = 0; i < r; i++)
  {
      for (let j =0 ; j < c; j++)
      {
          if(board[i][j] == "O" &&  (i == 0 || i == r - 1))
          {
            
              dfs(i,j,board)
          }
          if(board[i][j] == "O" &&  (j == 0 || j== c - 1)) 
          {
             
              dfs(i,j,board)
          }
      }
  }
    

    
    
//flip the region to O
  for (let i = 0; i < r; i++)
  {
      for (let j =0 ; j < c; j++)
      {
         if (board[i][j] == "O") board[i][j] = "X"
      }
  }
    
// flip the temporary flags back to O
     for (let i = 0; i < r; i++)
  {
      for (let j =0 ; j < c; j++)
      {
         if (board[i][j] == "T") board[i][j] = "O"
      }
  }
    

    
    
    

};
const dfs = (r,c,board) => 
{
    let rC = 0 <= r && r < board.length;
    let cC = 0 <= c && c < board[0].length;
    
    if(!rC || !cC) return;
    
    if(board[r][c] == "X") return;
    if(board[r][c] == "T") return;
    if(board[r][c] == "O")board[r][c] = "T"
    
    
    dfs(r+1,c,board);
    dfs(r-1,c,board);
    dfs(r,c+1,board);
    dfs(r,c-1,board);
}

