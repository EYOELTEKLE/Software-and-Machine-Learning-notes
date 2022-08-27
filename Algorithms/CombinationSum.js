/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 uses backtracking and Dp to solve this problem
 very hard to come up with this solution
 */
var combinationSum = function(candidates, target,mem={}) {
    if (target in mem)
    {
        return mem[target]
    }
    if (target == 0)
    {
        return [[]]
    }
    if (target < 0)
    {
        return null;
    }
    let overall = [];
    for (let item of candidates)
    {
        let temp = target - item;
        let ans = combinationSum(candidates,temp,mem);
        if (ans != null)
        {
            
           let x = ans.map(x => [ ...x, item]);

            overall.push( ...x)
            
        
        }
        
    }
    let obj =
{

}
for (let i = 0; i < overall.length; i++)
{
   
        let temp = [ ...overall[i]].sort((a,b) => a - b).join('');
        
        if (!(temp in obj))
        {       obj[temp] = i;
             
        }
}

let fixed = Object.values(obj)

let news = fixed.map( y => overall[y])
mem[target] = news;
return news
    
};

