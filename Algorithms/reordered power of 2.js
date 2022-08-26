/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let s = ''+n;
    
  let x = s.split('').map(x => Number(x));
    
    const getPerm = perm(x);
    for (let item of getPerm)
    {
        
        
          
            let temp = Number(item.join(''));
            if (item[0] == 0 && !(temp & (temp - 1)))
            {
                return false;
            }
            if ( (temp != 0) && !(temp & (temp - 1))) return true
             
    }

    
   
    return false;
};

const perm = (x) => 
{
    if (x.length == 0) return [[]]
    let firstEl = x[0];
    let rest = x.slice(1);
    let permWithout = perm(rest);
    let ans = [];

    permWithout.forEach (item => 
    {
        for (let i = 0; i <= item.length; i++)
        {
            let withF = [ ...item.slice(0,i), firstEl, ...item.slice(i)]
            ans.push(withF)
        }
    }) 
    return ans;
}
