/**
 * @param {string} s
 * @return {string}

 y = "abcdefghi"
      i   j
      brute force - O(n^3) -> Time Complexity
                  - O (1) -> Space Complexity 
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let max = -Infinity;
    let ans = []
    const isPalindrome = (start,end) => 
    {
        let i = start;
        let j = end
        while(i < j)
        {
            if (s[i] != s[j]) return false;
            i++;
            j--
        }
        return true;
    }
    for (let i = 0; i < n; i++)
    {
        for (let j = i; j < n; j++)
        {
            if(isPalindrome(i,j))
            {
                
                if (max < (j - i+1)) 
                {
                    max = j - i + 1;
                    ans.pop();
                    ans.push([i,j])
                }
            }
        }
    }
    let slice = s.slice(ans[0][0],ans[0][1] + 1)
    return slice;
};
/** 
i   j
b a b a d
0 1 2 3 4
**/


/**
 * @param {string} s
 * @return {string}
 */

/**
optimal solution - DP
Time Complexity - O(n^2)
Space Complexity - O(n^2)

**/
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = new Array(n).fill().map(() => new Array(n).fill(false));

    
    if(s.length == 1 || s.length == 0)return s[0];
    if(s.length == 2)
    {
        if(s[0] != s[1])
        {
            return s[0]
        }
        return s;
    }
    for (let i  = 0; i < dp.length; i++)
    {
        for (let j = 0; j < dp[0].length; j++)
        {
            if (i == j ) dp[i][j] = 1;
            if (Math.abs(i - j) == 1 && j > i)
            {
                if(s[i] == s[j]) dp[i][j] = 1;
                else
                {
                    dp[i][j] = 0;
                }
            }

        }
    }
    
    j = 2;
    i = 0;
    while(true)
    {
        if(i == 0 && j == n - 1)
        {
            if(s[i] == s[j] && dp[i+1][j-1] == 1)
            {
                dp[i][j] = 1;
            }
            else
            {
                dp[i][j] = 0
            }
            break;
        }
       

        
        if(s[i] === s[j] && dp[i+1][j-1] == 1) {
            dp[i][j] = 1;

            }
        else
        {
            dp[i][j] = 0
        }

         if (j == n-1)
        {
           
            j = n - i;
            i = 0;
        }

        else{
            i++;
            j++;
        }
    }

    let max = -Infinity;
    let ans = [];
    
    for (let i = 0; i < dp.length; i++)
    {
        for (let j = 0; j < dp[0].length; j++)
        {
            if (dp[i][j] == 1)
            {
                if (max < Math.abs(j - i) )
                {
                    max = Math.abs(j-i)
                    ans.pop();
                    ans.push([i,j])
                }
            }
        }
    }
    if (max == -Infinity)
    {
        s.slice(i,j+1)      
    }
  return s.slice(ans[0][0],(ans[0][1])+1); 
};
