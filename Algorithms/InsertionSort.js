const sorter = (list) => 
{
    for (let i = 1; i < list.length; i++)
    {
        let hole = list[i];
        let position = i;

        while(position > 0 && list[position - 1] > hole)
        {
            list[position] = list[position - 1]
            position--;
        }
        list[position] = hole
        
    }
    return list
}