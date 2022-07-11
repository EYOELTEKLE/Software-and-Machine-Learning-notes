/**
 * @param {number} numRows
 * @return {number[][]}
 * uses two pointers for summing the previous list data
 * uses two stack for each column and row operations
 */
var generate = function(numRows) {
    let ans = []; //contains the the whole list
    let nest = []; //single 1d list
    let ll = 0; // left - pointer
    let rr = 1; //right-pointer
    for (let i = 0; i < numRows; i++)//iterate rows time
    {
        for (let j = 0; j <= i; j++) // iterate each column
        {
          if (j == 0 || j == i) // push one if the column is either 1 or last item
            {
                nest.push(1);
            }
         else // if not sum up the previous values by moviing the pointers
         // the result is stored in the ans list we have to access it by subtracting one from the current row
         // we move the pointers by one
         //one is ahead by 1 
         we clear the pointers back to first state after the second loop finishes
         and clear the second list all values
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
    return ans;
};