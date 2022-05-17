# DYNAMIC DATA
- any data types can be passed to the jsx except bool and objects
- {datatypes or expression}

# Component Hierarchy 
  scenario 1 - APP.js -> comp1.js -> ....
  secnario 2  -App.js -> comp1.js
                                - >comp2.js
 scenario -> other possibilites
 # UseState Hook
	-  we can update dynamic values using useStata Hooks
	- const [dataValue, SetDataValue] = useState('Initial-vale' or 0);
	- dataValue - the Dynamic variable
	- SetDataValue - The method we use for setting / changing the data
# Dynamic Rendering 
	- using Es6 map method let us transform an array of objects
	- Array = [{name:""},{name:""},{name:""}] -> array of objects
	- to dynamically Render this 
	- we can do this: --> Array.map((elem) => <h1>{elem.name}</h1>);
# props
- We can pass data from one component to another using props
- <Parent/> -> component 1
- <child/> - > component 2
- let assume child component resides in parent component
- <child propsname={data}>/ we invoke this to use props 