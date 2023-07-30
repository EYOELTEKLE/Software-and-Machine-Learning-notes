/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices)
{
    
    const helper = (index,buying,mem={}) => 
    {
        let curr = index+","+buying;
        if(curr in mem) return mem[curr];
        if(index >= prices.length)return 0;
        //if(index == prices.length - 1)
        let min =  -Infinity;
        if(buying)
        {
           let buy =  helper(index+1,!buying,mem) - prices[index];
           let cooldown = helper(index+1,buying,mem)
           min = Math.max(buy,cooldown)
        }
        else
        {
            let selling = helper(index+2,!buying,mem) + prices[index];
            let cooldown = helper(index+1,buying,mem)
            min = Math.max(selling,cooldown)
        }
        mem[curr] = min
        return mem[curr];
    }
    let ans = helper(0,true);
    return ans
};
