# Es6 map and Filter method
- Map method lets us convert an array of objects to an html element that we want to render it as.
- const database = [ (name:"xaffs",age:"sfsfas"), (name:"xaffs",age:"sfsfas"), (name:"xaffs",age:"sfsfas"), ]
- to render this as a h1 heading element we can use map method
-  {   database.map((elem) => {  <h1>{elem.name} : {elem.age}<h1>   }   )   }
-  The above shows how we can render using map
- if we want to transform our array based on condition we can use filter method
