const prime = (elem) => 
{

let s1 = 1; // elem 1
let s2 = 1; // elem2
for (i = 2; i <= elem; i++)
    {
        let tmp1 =s2;  //store last fib sequence
        s2 = s1 + s2; // sum the fib series and store at the last seq
        s1 =  tmp1; // first elem of fib seq gets updates
    }
    return s2; // return the targeted fib series
            
};