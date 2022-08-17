/**

Counts the number of ways a string can be formed from a wordbank
memoized solution

**/
const can = (target,Wordbank,mem={}) => 
{
    if (target in mem)
    {
        return mem[target]
    }
    if (target == "")
    {
        return 1
    }
    let count = 0
    for (let item of Wordbank)
    {
        if (target.indexOf(item) == 0)
        {
            let temp = target.slice(item.length);
            let ans = can(temp,Wordbank,mem);
            count = count + ans;
        }
    }
    mem[target] = count;
    return count;
}
