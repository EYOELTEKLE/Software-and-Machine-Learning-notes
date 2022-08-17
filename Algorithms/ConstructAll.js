const allConstruct = (target,wordbank) => 
{
    if (target == "")
    {
        return [[]]
    }
    let result = []
    for (let item of wordbank)
    {
        if (target.indexOf(item) == 0)
        {
            let temp = target.slice(item.length);
            let ans = allConstruct(temp,wordbank);
            const ways = ans.map(items => [ item, ...items])
            result.push( ...ways)
        }
        
    }
    return result;
}
