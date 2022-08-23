/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums,depth = 0,subset = [],total = []) 
{
 if (depth == nums.length)
    {
        return total.push(subset)
    }
    
    subsets(nums,depth + 1,subset,total)
    subsets(nums,depth + 1,[ ...subset,nums[depth]],total)
    return total
};
