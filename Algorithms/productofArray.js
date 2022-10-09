/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let product = 1;
    let output = new Array(nums.length);
    
    output[0] = 1
    for (let i = 1; i < nums.length; i++)
    {
        output[i] = output[i-1] * nums[i-1];
    }
    product = 1;
    
    for (let i = nums.length - 1; i >= 0; i--)
    {
        output[i] = product * output[i];
        product = product * nums[i];        
    }
    return output;
};
