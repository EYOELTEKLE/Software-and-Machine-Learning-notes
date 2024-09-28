/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
let longestArr = 0
let sum = 0;
let map = new Map(); 
for (let i = 0; i < nums.length; ++i)
{
    sum = nums[i] == 0 ? sum - 1: sum + 1
    if(sum == 0)
    {
       if(longestArr < i + 1)
       {
           longestArr = i + 1
       }
    }
    if(!(map.has(sum)))
    {
            map.set(sum,i)
    }
    else
    {
  let len = i - map.get(sum) 
        if(longestArr < len)
      longestArr = len
    }
}
return longestArr
};

