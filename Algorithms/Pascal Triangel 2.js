/**
 * @param {number} rowIndex
 * @return {number[]
 * same solution as the first one
 * just return the last value of the stack
 * 
 */
var getRow = function(rowIndex) {
    let ans = [];
    let nest = [];
    let ll = 0;
    let rr = 1;
    for (let i = 0; i < rowIndex + 1; i++)
    {
        for (let j = 0; j <= i; j++)
        {
          if (j == 0 || j == i)
            {
                nest.push(1);
            }
         else
            {
                let val = ans[i-1][ll] + ans[i-1][rr]
                nest.push(val);
                ll++;
                rr++;
            }
           
        }
        ll = 0;
        rr = 1;
        ans.push(nest);
        nest = [];
    }
    return ans[ans.length - 1];
    
};