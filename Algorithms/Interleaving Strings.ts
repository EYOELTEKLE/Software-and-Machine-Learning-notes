function isInterleave(s1: string, s2: string, s3: string): boolean {

    //check if length of both string s1 and s2 match s3
    if(s1.length + s2.length != s3.length) return false;
    //check if length of s2 and s3 are one and are equal while s1 == ""
    if(s1 == "" && s2.length == 1 && s3.length == 1 && s3[0] == s2[0]) return true;
    //check if length of s1 and s2 are one and are equal while s1 == ""
    if(s2 == "" && s1.length == 1 && s3.length == 1 && s3[0] == s1[0]) return true;
    //check if s1 == s3 are equal(if s2 == "") or s2 == s3 are equal (if s1 == "")
    if(s1 == "" && s2 == s3 || s2 == "" && s1 == s3)return true;
   const dp = new Array(s1.length+1).fill(0).map((_) => new Array(s2.length+1).fill(false));
    dp[0][0] = true;

    for (let i = 1 ; i < dp.length; i++)
    {
        if(s2[i-1] == s3[i-1] && dp[0][i-1] == true)dp[0][i] = true;
    }
     for (let i = 1 ; i < dp[0].length; i++)
    {
        if(s1[i-1] == s3[i-1] && dp[i-1][0] == true)dp[i][0] = true;
    }
      for (let r = 1; r < dp.length; r++)
    {
        for (let c = 1; c < dp[0].length;c++)
        {
            let temp = r + c-1;

            if(s3[temp] == s1[r-1] && s2[c-1] != s3[temp])dp[r][c] = dp[r-1][c];
            else if(s3[temp] == s2[c-1] && s1[r-1] != s3[temp])dp[r][c] = dp[r][c-1];
            else if(s3[temp] == s2[c-1] && s1[r-1] == s3[temp])
            {
                dp[r][c] = dp[r-1][c] || dp[r][c-1]
            }
            else
            {
                dp[r][c] = false;
            }

        }
    }
    return dp[s1.length][s2.length];

};
