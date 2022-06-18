/**
 * @param {string} s
 * @return {boolean}
 * initialize an empty array to store the strings with only digits and aplhabet letters
 * we can get the ascii value of the characters using charCodeAt method
 * we make sure they fall under the right thing
 * after that e use the two pointer method to check every value from the left to the right match each other
 * time Complexity - O(n)
 * space Complexity - O(n)
 */
var isPalindrome = function(s) {
    let arr = [];
    
    for (let i  = 0; i < s.length; i++)
    {
        if(s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122 || s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 || s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57 ){
            arr.push(s[i].toLowerCase());
       
    }
    
    }
    let l =0 ;
    let r = arr.length - 1;
    while(l < r)
    {
        if(arr[l] != arr[r])
        {
            return false;
        }
        l++;
        r--;
    }
    return true;
   
};