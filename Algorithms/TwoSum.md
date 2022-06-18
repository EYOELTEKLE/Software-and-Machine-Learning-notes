/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target)
{
/*
    works by subtracting the target value to each index of the input array
    then it checks if it is in the objec
    if not it puts it in the hash map
    target = 9
    nums = [2,7,11,15]
obj = 
{
2:0, ---> on the first loop /two stored as a key with value of 0/
   
}
loop breaks by we return the index using the value of key which is 2 using that key we return the value obj[temp]

    uses dictionary for hashing  
*/
   const obj = 
         {
                            
         }
    let ans = []
   for (let i = 0; i < nums.length; i++)
   {
       if(i == 0)
       {
           obj[nums[i]] = i;
       }
       else
       {
            let temp = target - nums[i];
            if (temp in obj)
            {
                
                ans.push(i,obj[temp]);
                break;
            }
            obj[nums[i]] = i;
       }
   }
    return ans;
};