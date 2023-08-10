/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//dfs solution

/** 
**/
var spiralOrder = function(matrix) {
    const visited = new Set();
    const ans = [];
    const dfs = (r,c,up) => 
    {
        let b1 = 0 <= r && r < matrix.length;
        let b2 = 0 <= c && c < matrix[0].length;
        if(!b1 || !b2) return;
        if(visited.has(r+','+c)) return;
        ans.push(matrix[r][c])
        visited.add(r+','+c)
        if(up)dfs(r-1,c,true);
        dfs(r,c+1,false)
        dfs(r+1,c,false)
        dfs(r,c-1,false)
        dfs(r-1,c,true)
    }
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[0].length; j++)
        {
            dfs(i,j,false);
        }
    }
    return ans;
};
