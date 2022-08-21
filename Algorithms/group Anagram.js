var groupAnagrams = function(strs) {
   let arr = strs.map(x => x.split("")).map(x => x.sort()).map(x => x.join(''));
   let obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (!(arr[i] in obj)) obj[arr[i]] = []
        obj[arr[i]].push(strs[i])
    };
   return Object.values(obj)
    
};
