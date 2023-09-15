function combinationSum(candidates: number[], target: number): number[][] {
    let soln:number[][] = []
    const dfs = (index:number,curr:number[],total:number) => 
    {
        if(total == target)
        {
            soln.push([...curr])
            return;
        }
        if(total > target || index >= candidates.length)return;
        curr.push(candidates[index])
        dfs(index,curr,total+candidates[index])
        curr.pop();
        dfs(index+1,curr,total)
    }
    dfs(0,[],0)
    return soln;
};
