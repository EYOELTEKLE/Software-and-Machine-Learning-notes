/**
 * @param {number[]} nums
 * @return {number}
 */
 
var longestConsecutive = function(nums) {
    let hash = {};
    for (let num of nums)hash[num] = 1;
    let sequence = 1;
    let max = -Infinity
    for (let num of nums)
    {
        //start sequence
        if(!((num-1) in hash))
        {
            while(num+1 in hash)
            {
                sequence++;
                num++
            }  
        }
         max = Math.max(sequence,max)
         sequence = 1;  
    }
    return max == -Infinity ? 0: max;
};
