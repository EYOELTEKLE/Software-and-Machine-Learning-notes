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
