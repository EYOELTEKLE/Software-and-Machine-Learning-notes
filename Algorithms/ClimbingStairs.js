/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n,count = 0,mem={})
{
    if (count in mem) return mem[count]
   if (n == count)
   {
       return 1
   }
    if (count > n)
    {
        return 0
    }
    mem[count] =  climbStairs(n,count + 1,mem) + climbStairs(n,count + 2,mem)
    return mem[count]
}
