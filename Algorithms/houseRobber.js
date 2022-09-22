/**
 * @param {number[]} nums
 * @return {number}
 start from index 0 or 1
 */

/**
[rob1,rob2,n,n+1,.....]

**/

var rob = function(nums) {
    
    let house1 = 0;
    let house2 = 0;
    for (let item of nums)
    {
        let temp = Math.max(house1+item,house2)
        house1 = house2;
        house2 = temp;
    }
  return house2;  
};
