"""
0 - 1 Knapsack Problem
MediumAccuracy: 31.76%Submissions: 331K+Points: 4
Save 25% On Your Favorite Courses & Get Additional Cashback. Explore Offers Now

You are given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. Note that we have only one quantity of each item.
In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or dont pick it (0-1 property).

Example 1:

Input:
N = 3
W = 4
values[] = {1,2,3}
weight[] = {4,5,1}
Output: 3
"""
class Solution:
    
    #Function to return max value that can be put in knapsack of capacity W.
    def knapSack(self,W, wt, val, n):
        dp = [ [ 0 for col in range(W+1)] for row in range(n+1)]
        for row in range(1,len(dp)):
            for col in range(1,len(dp[0])):
                if col-wt[row-1] < 0 or not wt[row-1]:
                    dp[row][col] = dp[row-1][col]
                else:
                    dp[row][col] = max(dp[row-1][col], dp[row-1][col-wt[row-1]]+val[row-1])
        return dp[n][W]
