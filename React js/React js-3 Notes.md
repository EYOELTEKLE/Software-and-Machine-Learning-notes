# Use Effect Hook
- is a function called when a Dom is rendered
- can be quite useful for server side scripting
- import it using destructuring { useEffect } from 'react'
- useEffect ( () => { console.log("effect in place ")}  )
- to prevent useEffect from being called at a refresh of the webpage we can add dependencies
- useEffect ( () => { console.log("effect in place ")} , [ ] )
- [     ] if the dependecy array is set to empty  , then the useEffect will learn once at the initial render only
-  useEffect ( () => {  fetch(url).then(data => data.json).then(datas => setState(datas))} , [ ] );
- we can fetch data using the above logic 
- we can use conditional loops to create a loading message
- 
# props functions
# Conditional loading message

