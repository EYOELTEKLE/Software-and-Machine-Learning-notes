/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   
  let hash = {};
    for (let item of magazine)
    {
        if (!(item in hash)) hash[item] = 0;
        hash[item] += 1 
    };
    let hash2 = {};
    
    for (let item of ransomNote)
    {
        if (!(item in hash2)) hash2[item] = 0;
        hash2[item] += 1 
    };

    for (let item of ransomNote)
    {
        if (hash2[item] == 0  || !(item in hash))
        {
            return false
        }
        if ( hash2[item] > hash[item])
        {
            return false
        }
    }
return true;
};

