function validParentheses(s) {
 let stack = [];
    let obj = 
        {
            "]":"[",
            "}":"{",
            ")":"("
        }
 
    for (let i = 0; i < s.length; i++ )
    {
        
        if (s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i]);
            continue;
        }
       if (stack.length == 0 ){return false};
        
        
       if(stack[stack.length - 1] == obj[s[i]]){
           stack.pop()
              }
       else
       {
           return (false)
       }
           
    }
   return stack.length == 0 ? true : false
}