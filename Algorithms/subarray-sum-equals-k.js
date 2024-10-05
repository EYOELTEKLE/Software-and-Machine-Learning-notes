/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
let total = 0;
let sum = 0;
let seen = new Map()
seen.set(0,1)
for (let i  = 0 ; i < nums.length; i++)
{
	sum +=  nums[i]
	if(seen.has(sum-k))
	{
		total += seen.get(sum-k)
	}
	seen.set(sum, (seen.get(sum) || 0)+1)
}
 return total   
}
