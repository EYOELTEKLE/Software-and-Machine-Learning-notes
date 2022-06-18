const pow = (num) => 
    {
        for (i = 0; i < num; i++)
            {
                if (2** i == num)
                {
                    return true;
                }
            }
        return false;
    }
optimizable using bitwise operation

const pow = (num) => 
{
	num & num > 0 ? false: true; // and bitwise operation of z base number;
}