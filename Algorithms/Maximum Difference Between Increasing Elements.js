/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumDifference = function(arr) {
     let max = -Infinity;
    let local = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if(i == 0){min = arr[i]}
        else
        {
            min = Math.min(min,arr[i])
            local = Math.max(local, arr[i] - arr[i-1])
        }

        if(local > max)max = local;
        if((arr[i]-min) > max)max = arr[i]-min
    }
    if(max == -Infinity || max == 0)return -1;
    return max;
};
