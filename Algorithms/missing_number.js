/**
 * @param {number[]} nums
 * @return {number}
 * sort the number in ascending order
 * loop starting from zero and check if loop iterator matches the sort element
 * if not return element
 * if not found then return the maximum size of the array
 */
var missingNumber = function(nums) {

    let max = nums.length;
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length; i++)
    {
        if(nums[i] == i)
        {
            
        }
        else
        {
            return i
        }
    }
    return max;
};
