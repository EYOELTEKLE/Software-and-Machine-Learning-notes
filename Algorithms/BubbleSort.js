const arr = (n) => 
{
    const len = n.length;
    for(let  i = 0; i < len; i++)
    {
        for (let j = 0;j < len; j++)
        {
            if (n[j] > n[j+1])
            {
                let temp = n[j+1]
                n[j+1] = n[j]
                n[j] = temp;
            }
        }
       
    }
    return n
}