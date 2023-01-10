/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a- b)
    let result = [];
  for (let i = 0; i < nums.length; i++)
  {
      if (i > 0 && nums[i] === nums[i-1])continue;
      let left = i+1;
      let right = nums.length - 1;
      while(left < right)
      {
          let threesum = nums[i] + nums[left] + nums[right];
          if(threesum > 0)right--;
          else if (threesum < 0) left++;
          else
          {
              result.push([nums[i],nums[left],nums[right]]);
              left++;
              while(nums[left] == nums[left - 1] && left < right)left++;
          }
      }
  }
return result
};
