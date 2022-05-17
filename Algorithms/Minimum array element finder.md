const min = (list) => 
{
    let min; // initialize min 

    for (i = 0; i < list.length; i++) // iterate till list length
        {
            if (i == 0)
            {
                min = list[i]; //initialize min 
            }
            else
            {
                if (list[i] < min)
                {
                    min = list[i]  //check if list[i] is less than min if true change min
                }
            }
        }
    return min;
}