/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /** 
 **/
var findTargetSumWays = function(nums, target) {
    const helper = (index,total,mem={}) => 
    {
        let curr = index+","+total;
        if(curr in mem) return mem[curr];
        if(index >= nums.length && total == target) return 1; 
        if (index >= nums.length && total != target)  return 0;   
        mem[curr] =  helper(index+1,total-nums[index],mem)+helper(index+1,total+nums[index],mem);
        return mem[curr]
    }
    const ans = helper(0,0);
    return ans;
};
