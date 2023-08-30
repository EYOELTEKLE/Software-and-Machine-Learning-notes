/**
 * @param {number[][]} triangle
 * @return {number}
 */
 /**
   subproblem can been seen from the input example
   choose curr element then find the subproblem of moving to (r+1,c) or (r+1,c+1)
   base case is when we reach the row length of the triangle
 **/
var minimumTotal = function(triangle) {
    const helper = (r,c,mem={}) => 
    {
        let curr = r+','+c;
        if(curr in mem)return mem[curr]
        if(r == triangle.length)return 0
        let path1 = helper(r+1,c,mem);
        let path2 = helper(r+1,c+1,mem);
        mem[curr] =  triangle[r][c] + Math.min(path1,path2);
       return mem[curr]
    }
    let ans = helper(0,0)
    return ans;
};
