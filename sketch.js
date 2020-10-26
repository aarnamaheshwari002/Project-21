var bullet, wall;
var speed, weight;
var deformation;
var thickness;

function setup() {
  createCanvas(1000,400);
 
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(900, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
  bullet = createSprite(50, 200, 50, 8);
  bullet.velocityX = speed;

  

}

function draw() {
  background("lightblue");  

  hasCollided(bullet, wall);
  Hbullet();
  

  drawSprites();
}


function hasCollided(bullet1, wall1){

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge >= wallLeftEdge){

return true;

  }
else{

  return false;

}
 

}

function Hbullet(){

  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;
  
  var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
  if (deformation > 10){
  
    wall.shapeColor = ("red");
  
  }
  
  if (deformation < 10){
  
    wall.shapeColor = ("green");
  
  }

}

}
