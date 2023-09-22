var mostPoints = function(questions) {
   const helper = (index,cache={}) => 
    {
        if(index in cache)return cache[index]
        if(index >= questions.length)return 0;

        cache[index] = Math.max(questions[index][0]+helper(index+questions[index][1]+1,cache),helper(index+1,cache))
        return cache[index]
    }
    let ans = helper(0);
    return ans;
};
