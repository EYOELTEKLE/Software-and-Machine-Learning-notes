const allSum = (target,list,mem = {}) =>
{
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
        return false;
    };

    let result = [];
    for (let item of list)
    {
        let temp = target - item;
        let ans = allSum(temp,list,mem);
        if (ans)
        {
            const tar = ans.map(i => [ ...i, item]);
            result.push( ...tar)
        }
    }
mem[target] = result
return result;
}
