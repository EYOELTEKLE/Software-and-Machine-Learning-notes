<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div class="card" id="card">
    <div class="front">Front</div>
    <div class="black">
      <a href="#popup" class="book">Book Now</a>
    </div>
   </div>
  <div class="popup" id="popup">
    <div class="content">
      <a href="#card" class="close">
        <img src="https://cdn.icon-icons.com/icons2/933/PNG/512/close-button_icon-icons.com_72803.png" alt="close">
      </a>
      
      popup
    </div>
  </div>
  
</body>
</html>
css
*
{
  margin:0;
  
}
body
{
  
}
.card
{
 
  width:150px;
  height:150px;
  position:relative;
  perspective:2500px;
  margin:5px;
}
.front
{
  background:orange;
  width:150px;
  height:150px;
  position:absolute;
  top:0;
  left:0;
  transition:all .8s;
  
  backface-visibility:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  color:red;
  font-weight:600;
  font-size:1.5rem;
  z-index:1;
  margin:0;
  
}
.black
{
  background:green;
  width:150px;
  height:150px;
  transform:rotateY(180deg);
  transition:all .8s;
  display:flex;
  justify-content:center;
  align-items:center;
  color:black;
  font-weight:600;
  font-size:1.5rem;
  margin:0;
  
  
}
.card:hover .front
{
  transform:rotateY(180deg);
}
.card:hover .black
{
  transform:rotateY(0deg);
  
}
.book
{
  border:1px solid white;
  border-radius:400px;
  
  padding:.4rem 0.6rem .4rem 0.6rem;
  background:brown;
  color:white;
  text-decoration:none;
  font-weight:900;
  font-size:.9rem;
}
.book:hover
{
  background:blue;
  color:yellow;
}
.popup
{
  position:fixed;
  height:100vh;
  width:100%;
  top:0;
  left:0;
  background-color:rgba(1,1,1,.8);   
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
visibility:hidden;
  transition:all .5s;
  
}
.popup:target
{
  opacity:1;
visibility:visible;
}
.content
{
  width:35%;
  height:75%;
  background:white;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  
}
img
{
  width:20px;
  height:20px;
  position:absolute;
  top:0;
  right:0;
  margin-right:9px;
  margin-top:5px;
  z-index:3;
}
.close
{
  text-decoration:none;
  
   width:20px;
  height:20px;
  position:absolute;
  top:0;
  right:0;
  margin-right:9px;
  margin-top:5px;
  z-index:1;
  
}


/**
The trick to make this magic work is to use the both the card(container) div and each front or back div 
then to rotate them accordingly.
if we try to rotate only one the sides using the one o f the classess, the rotation wont work it will collapse. 
popup

using visibility and target pseudo element we can create a pop purely with Css

**/