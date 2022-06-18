/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) 
{
    let l = 0; //left pointer
    let r = s.length - 1; //right pointer
    while(l < r) //makes sure pointers never reach each other
    {
        let temp = s[r];
         s[r] = s[l];
         s[l] = temp;
        l++;
        r--;
    }
    

};