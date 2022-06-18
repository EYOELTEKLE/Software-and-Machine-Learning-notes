''''
using two hash maps we can solve the 
valid anagram problem
store the characters as keys and their count number as 1 or incremented value

time complexity - O(s + T)
Space Complexity - O(s + T)

''''
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t)
{
    if (s.length != t.length)
    {
        return false;
    }
    let obj1 = {} //initial hash map for s
    let obj2 = {} //initial hash map for s
    obj1[s[0]] = 1;//add the first value on the hash
    obj2[t[0]] = 1;//add the first value on the hash
    
    for (let i = 1; i < s.length; i++)
    {
        if (s[i] in obj1)
	        {
            obj1[s[i]] += 1 //check if exists in the hash map1 if true increment
        }
        if (t[i] in obj2)
        {
            obj2[t[i]] += 1 //check if exists in the hash map1 if true increment
        }
         if (!(s[i] in obj1))
        {
            obj1[s[i]] = 1;
            //check if exists in the hash map1 if false initial value of occurenence set it to 1
        }
         if (!(t[i] in obj2))
        {
            obj2[t[i]] = 1;
            //check if exists in the hash map1 if false initial value of occurenence set it to 1
        }
        
 }
    for (let i  = 0; i < s.length; i++)
    {
        if(s[i] in obj1 && s[i] in obj2 && obj1[s[i]] == obj2[s[i]])// check if the occurence key values in both hash maps are the same if true skip the loop
        {
            continue;
        }
        //if not return false
        return false;
    }
    return true;// if it passes the loop then ,it tis true we can construct the anagram from s that is equivalent to t;
};
//**
Power of Hash maps


**//