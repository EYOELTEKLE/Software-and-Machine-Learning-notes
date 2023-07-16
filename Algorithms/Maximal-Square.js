/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = new Array(matrix.length+1).fill().map(() => new Array(matrix[0].length+1).fill(0));
    let max = -Infinity;
    for (let r = 1; r < dp.length; r++)
    {
        for (let c = 1; c < dp[0].length;c++)
        {
            if(matrix[r-1][c-1] == "1")dp[r][c] = 1 + Math.min(dp[r][c-1],dp[r-1][c],dp[r-1][c-1])
        }
    }
    dp.map((item) => item.map((x) => {if(x > max)max =x})) //find max cell
    return max == -Infinity ? 0 : max*max;
};
