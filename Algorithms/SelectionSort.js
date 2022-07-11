const x = (n) => 
{
    let min = 0;
    for (let i = 0; i < n.length; i++)
    {
        let min = i;
        let temp = n[i];
        for (let j = i + 1; j < n.length;j++)
        {
            if (temp > n[j])
            {
            
                min = j;
            }
        }
        n[i] = n[min];
        n[min] = temp;
        
    }
    return n
}