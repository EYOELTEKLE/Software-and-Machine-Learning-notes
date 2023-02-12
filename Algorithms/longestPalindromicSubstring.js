/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
     let n = s.length;
    let dp = new Array(n).fill().map(() => new Array(n).fill(false));

    
    if(s.length == 1 || s.length == 0)return 1;
    if(s.length == 2)
    {
        if(s[0] != s[1])
        {
            return 2
        }
        return 3;
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

   
    let count = 0;
    for (let i = 0; i < dp.length; i++)
    {
        for (let j = 0; j < dp[0].length; j++)
        {
            if (dp[i][j] == 1)
            {
                count++;
            }
        }
    }
 return count;
    
};
