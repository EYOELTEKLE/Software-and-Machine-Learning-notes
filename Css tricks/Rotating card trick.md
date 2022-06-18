<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="card">
    <div class="front">Front</div>
    <div class="black">Black</div>
    
  </div>
  
</body>
</html>

css section

card
{
 
  width:150px;
  height:150px;
  position:relative;
  perspective:2500px;
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
  z-index:1;
  backface-visibility:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  color:red;
  font-weight:600;
  font-size:1.5rem;
  
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
  
  
}
.card:hover .front
{
  transform:rotateY(180deg);
}
.card:hover .black
{
  transform:rotateY(0deg);
  
}
/**
The trick to make this magic work is to use the both the card(container) div and each front or back div 
then to rotate them accordingly.
if we try to rotate only one the sides using the one o f the classess, the rotation wont work it will collapse. 

**/