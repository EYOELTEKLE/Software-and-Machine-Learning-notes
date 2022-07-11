const list = (n) => 
{
    if (n.length == 1)
    {
            return n
    }
   let length = Math.floor(n.length/2);
   let  left = n.slice(0,length);
   let  right = n.slice(length, n.length)

     return merge( list(left),
        list(right))
}
const merge = (left,right) =>
{
    let mergeList = []
    let i = 0;
    let j = 0;
    while (true)
    {
        if (left[i] < right[j] && left[i] != undefined && right[j] != undefined)
        {
            mergeList.push(left[i])
            i++;
        }
                if (left[i] > right[j] && left[i] != undefined && right[j] != undefined)
        {
            mergeList.push(right[j]);
            j++;
        }
        if (left[i] == undefined && right[j] != undefined)
        {
            mergeList.push(right[j])
            j++
        }
          if (left[i] != undefined && right[j] == undefined)
        {
            mergeList.push(left[i]);
            i++;
        }
        if (left[i] == undefined && right[j] == undefined)
        {
            break
        }
    
    }
    return mergeList
}