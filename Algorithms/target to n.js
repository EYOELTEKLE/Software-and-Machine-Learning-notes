/**


Recursion -

Returns a target number starting from 0 to n
Time Complexity - O(n^2);
Space Complexity - O(n^2)

Reverse [ ...y,n] to [n, ...y] you will get n to n

Power of recursion with array destructuring
**/
const x= (n) => 
{
    if (n == 0) return [n];
    let temp = [];

    let y =  x(n - 1);
    temp = [ ...y, n];
    return temp
}
