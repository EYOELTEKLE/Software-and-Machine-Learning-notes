var groupAnagrams = function(strs) {
   let arr = strs.map(x => x.split("")).map(x => x.sort()).map(x => x.join(''));
   let obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (!(arr[i] in obj)) obj[arr[i]] = []
        obj[arr[i]].push(i)
    };
    
    let val = Object.values(obj);
    let ans = [];
    let stack = []
    for (let i = 0; i < val.length;i++)
    {
        for (let j = 0; j < val[i].length;j++)
        {
            
            stack.push(strs[val[i][j]])
            
        }
        ans.push(stack);
        stack = []
        
    }
   return ans
    
};
