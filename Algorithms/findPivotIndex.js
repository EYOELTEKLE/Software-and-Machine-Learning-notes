/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let pivot = 0;

    while(pivot < nums.length)
    {
        let leftsum = 0;
        let rightsum = 0
        for(let i = 0; i < pivot; i++)
        {
            leftsum += nums[i]
        }

        for (let j = pivot+1; j < nums.length; j++)
        {
            rightsum += nums[j]
        }

        if(leftsum == rightsum)return pivot;

        pivot++;
    }
    return -1
};
