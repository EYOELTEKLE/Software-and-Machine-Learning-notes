const perfectSquare = (n) =>  // declare the main function
    {
	        i = 0;                           // this recursion iterator value
        return checker(n,i)     // call the checker function,we need this becaue the i terator value should be incremented //otherwise it would get redeclared with in this scope which makes the call stack crash
    }
const checker = (n,i) =>     // recieves the number and recursion iterator 
    {

            if (i*i == n)   // check if i *i  is equal to the target number
        {
            return true;   // if true return true to the all waiting-functions
        }
        else if (i == n)   // if the i reaches the target number then return false, it has no perfect square;
        {
            return false;
        }
        i++;      // Increment i value
        return checker(n,i) // recursion call
    }