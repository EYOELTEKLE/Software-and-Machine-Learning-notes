<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<div class="container">
  <div class="header">Header</div>
  <div class="Menu">Menu</div>
  <div class="Hero">Hero</div>
  <div class="Main">Main</div>
  <div class="blank">Blank</div>
  <div class="wrapper">
     <div class="Image">Image</div>
  <div class="Extra">Extra</div>
  </div>
 
  <div class="Banner">Banner</div>
</div>
</body>
</html>

css 

.container
{
  display:grid;
  height:100vh;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:1fr 4fr 2fr 1fr;
}
.header
{
  background:blue;
  display:flex;
  justify-content:center;
  align-items:center;
}
.Menu
{
  background:red;
  grid-column-start:2;
  grid-column-end:4;
  text-align:center;
  vertical-align:middle;
  display:flex;
  justify-content:center;
  align-items:center;
}
.Hero
{
  background:orange;
   grid-column-start:1;
  grid-column-end:4;
  
  display:flex;
  justify-content:center;
  align-items:center;
}
.Main
{
  background:silver;
  grid-column-start:1;
  grid-column-end:2;
  display:flex;
  justify-content:center;
  align-items:center;
}
.blank
{
  background:white;
  display:flex;
  justify-content:center;
  align-items:center;
  
}
.wrapper
{
  display:flex;
  flex-direction:column;
  display:flex;
  justify-content:center;
  align-items:center;
  
}

.Image
{
  background:brown;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
 
}
.Extra
{
  background:green;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
.Banner
{
  background:cyan;
  grid-column-start:1;
  grid-column-end:4;
  display:flex;
  justify-content:center;
  align-items:center;
}
@media only screen and
  (max-width: 768px),
  only screen and
  (max-height:340px)
{
  .container
  {
    display:flex;
    flex-direction:column;
    height:100vh;
  }
  div
  {
    height:100%;
  }
}
