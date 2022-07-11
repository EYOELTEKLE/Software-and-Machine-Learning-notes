/**
 * @param {number} n
 * @return {boolean}
 * using recursion
 */
var isHappy = function(n) {
if(n == 1)
{
    return true;
}
if(n < 10 && n != 1 && n !=7)
{
    return false
}
let temp = ''+n;
let sum = 0;
for(let i = 0; i < temp.length; i++)
{
    sum += parseInt(temp[i]) ** 2;
}
let final = parseInt(sum)
    
return isHappy(final)
    
};