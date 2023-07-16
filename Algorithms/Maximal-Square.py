class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        dp = [[0 for x in range(len(matrix[0])+1)] for y in range(len(matrix)+1)]
        for r in range(1,len(dp)):
            for c in range(1,len(dp[0])):
                if matrix[r-1][c-1] == "1":
                    dp[r][c] = 1 + min(dp[r-1][c-1],dp[r][c-1],dp[r-1][c])  
        max = float('-inf')
        for x in range(len(dp)):
            for y in range(len(dp[0])):
                if dp[x][y] > max:
                    max = dp[x][y] 
        return 1 if max == float('-inf') else max*max
