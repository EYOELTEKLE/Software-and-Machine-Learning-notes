function riverSizes(matrix) {
  // Write your code here.
  const visited = new Set();
  const ans = []

  const dfs = (r,c,size = 0) => 
    {
      let b1 = 0 <= r && r < matrix.length;
      let b2 = 0 <=c && c < matrix[0].length;
      if(!b1 || !b2 )return 0
      if(matrix[r][c] == 0) return 0;
      if (visited.has(r+','+c))return 0

      
      visited.add(r+','+c)
     return 1 +  dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
      
      
    }
  for (let r = 0; r < matrix.length;r++)
  {
    for (let c = 0; c < matrix[0].length; c++)
    {
     let eval =  dfs(r,c)
      if(eval) ans.push(eval)
     
    }
  }
  return ans
}
