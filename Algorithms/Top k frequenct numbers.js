/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {};
    
    for (let item of nums)
    {
        if(!(item in obj)) obj[item] = 0;
        obj[item] += 1;
    }
  
    let ans = Object.entries(obj).sort((a,b) => b[1] -a[1])
    let a = []
    for (let i = 0; i < k; i++)
    {
     a.push(Number(ans[i][0]))
    }
    return a
};
