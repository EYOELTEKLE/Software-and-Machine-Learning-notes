/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    
    const arr = new Array(n+1).fill(0);

        for (let i = 0; i < arr.length; i++)
        {
            let val = counter(i.toString(2));
            arr[i] = val;
        }
    return arr;
};

const counter = (num) => 
{
    let count = 0;

    for (let ch of num)
    {
        
        if(ch == 1)count++;
    }
    return count;
}
