var longestCommonSubsequence = function(text1, text2) {

        const helper = (i,j,cache={}) => 
        {
            let temp = i+','+j;
            if(temp in cache)return cache[temp];
            if(i == text1.length || j == text2.length)return "";
            else if(text1[i] == text2[j]){
                cache[temp] =  text1[i] + helper(i+1,j+1,cache)
                return cache[temp]
            }
            else
            {
               let word1 = helper(i+1,j,cache);
               let word2 = helper(i,j+1,cache);
               cache[temp] =  word1.length > word2.length ? word1 : word2;
                return cache[temp]
            }
        }  
        let ans = helper(0,0)
        return ans;
};
