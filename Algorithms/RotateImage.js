/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    //transpose array then reverse the row done
    for (let r = 0; r < matrix.length; r++)
    {
        for (let c = 0; c <  r; c++)
        {
            let temp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp
        }
      }
    for (let item of matrix)
    {
        item.reverse()
    }
};
