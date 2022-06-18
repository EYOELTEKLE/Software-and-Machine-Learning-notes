/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * using two pointers
 * because the arraysorted is the two pointers should never cross each other
 * based on conditions we shift the pointers towards each other till we get the target number
 */
var twoSum = function(numbers, target)
{
   let ans = [];
    
    let leftpointer = 0;
    let rightpointer = numbers.length - 1;
    
    while(leftpointer < rightpointer)
    {
        if(numbers[leftpointer] + numbers[rightpointer] == target)
        {
            ans.push(leftpointer+1);
            ans.push(rightpointer+1);
            break;
        }
        if (numbers[leftpointer] + numbers[rightpointer] > target)
        {
            rightpointer--;
        }
        if (numbers[leftpointer] + numbers[rightpointer] < target)
        {
            leftpointer++;
        }
        
    }
    return ans;
};