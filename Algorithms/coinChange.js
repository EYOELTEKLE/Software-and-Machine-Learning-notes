/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let result = DP(coins,amount);
    return result == null ? -1: result.length
};

const DP = (coins,amount,mem={}) => 
{
   
   if(amount in mem)
   {
       return mem[amount]
   } 
   if(amount == 0)
    {
        return []
    }
    if (amount < 0)
    {
        return null
    }
    let min = null;
    for (let item of coins)
    {
        let temp = amount - item;
        let val = DP(coins,temp,mem);
        if (val !== null)
        {
                let combo = [ ...val, item]
                
            if (min == null || min.length > combo.length)
            {
                min = combo;
                
            }
        }
    }

    mem[amount] = min
    return mem[amount]
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 /**
    TOP dOWN recursive solution added
  **/
var coinChange = function(coins, amount) {
    let ans = count(coins,amount);

    return ans == -Infinity ? -1 : ans;
};


const count = (coins,amount,mem={}) => 
{
   if (amount in mem) return mem[amount];
   if (amount == 0) return 0;
    if (amount < 0) return null;
    let min = -Infinity;

    for (let i = 0; i < coins.length; i++)
    {
        let ans = count(coins,amount - coins[i],mem);
        if((min == -Infinity || min > ans) && ans != null && ans != -Infinity)min = 1 + ans;       
        
    }
    mem[amount] = min;
    return mem[amount];
}
