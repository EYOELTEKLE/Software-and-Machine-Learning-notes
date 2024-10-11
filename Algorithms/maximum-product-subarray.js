/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;
    let prefix = 1;
    let suffix = 1
    for (let i = 0; i < nums.length; ++i)
    {
        if(prefix == 0)prefix = 1;
        if(suffix == 0)suffix = 1
        prefix = prefix * nums[i];
        suffix = suffix * nums[nums.length-i-1]
        max = Math.max(max,Math.max(prefix,suffix))
    }
    return max
};
