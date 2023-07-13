/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer1 = 0;//search string
    let pointer2 = 0;//original string

    while(true)
    {
        if(pointer1 < s.length && pointer2 > t.length) return false;
        if(pointer1 > s.length && pointer2 > t.length) break;

        if(s[pointer1] === t[pointer2])
        {
            pointer1++;
            pointer2++;
        }
        else
        {
            pointer2++;
        }
    }
    
    return true;
};
