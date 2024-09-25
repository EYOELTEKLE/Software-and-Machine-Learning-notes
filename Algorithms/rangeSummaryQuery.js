/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    for (let i = 1; i < nums.length; ++i)
    {
        this.nums[i] = this.nums[i] + this.nums[i-1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}  
 */
NumArray.prototype.sumRange = function(left, right) {
    return  this.nums[right] - (this.nums[left-1] ?? 0)
};
