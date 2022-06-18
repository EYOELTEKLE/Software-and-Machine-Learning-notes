/**
 * @param {string[]} ops
 * @return {number}
 * using hashmap
 * we can store the operation keys and functions to handle the inputs
 * the stack stores the numbers
 * using !isNaN to check if it is a number
 * we push the numbers to the stack
 * otherwise
 * we check what operation the code has come in each loop sequence
 * then using that key we call a function
 * after this
 * we sum the stacks using a for loop
 * Time complexity - O(n)
 * Space Complexity - O(n)//because we are using the stack , we may fill the stacks will the array numbers
 * 
 */
var calPoints = function(ops) 
{
    
 let stack = [];
 let sum = 0;
 let obj = 
{
    "+" : () => 
    {
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    },
    "D" : () => 
    {
        stack.push(stack[stack.length - 1] * 2)
    },
    "C" : () => 
    {
        stack.pop();
    }
}
 for (let i = 0; i < ops.length; i++)
 {
     if(!isNaN(ops[i]))
     {
         stack.push(parseInt(ops[i]))
     }
     
    if(ops[i] in obj)
     {
         obj[ops[i]]();
     }
     
 }
    for (let i = 0; i < stack.length; i++)
    {
        sum = sum + stack[i]
    }
    return sum;

};