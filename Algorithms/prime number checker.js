//prime number checker
const prime = (num) => //input number
{
  let count = 0;  //number of perfect dividers
  if (num == undefined || num == 0) // return null if input is undefined or zero
  {
      return undefined;
  }
  for (let i = 1; i <= num; i++) // Iterate starting from 1 to the targer number
      {
           if (num % i == 0) // check if every iteration value divides the target number perfectly
           {
               count++; //if true increment the total number of perfect dividers
           }
      }
    return count > 2 ? false : true // if length of divider is greater than 2 return false else return true
};