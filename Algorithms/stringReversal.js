/**

O(n) - time Complexity
O(n) - space Complexity


**/

const reverse = (s) => 
{
    const length = s.length - 1;

    const ans = recurr(s,length);

    return ans;
}

const recurr = (s,length) => 
{
    if (length == 0) return s[length];
    if (s[length] == null) return null;
    let temp = "";
    temp = s[length] + recurr(s,length - 1)
    return temp;
    
}
