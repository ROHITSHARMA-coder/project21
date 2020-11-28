var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
 thickness=random(22,83)
 

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
  wall.debug=true;
  speed=random(223,321)
  weight=random(30,552)
  
  
  bullet=createSprite(400,200,50,50);
  bullet.shapeColor="white";
   bullet.debug=true;
   bullet.velocityX=speed;

}

function draw() {
  background("yellow");

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  
  
  
  drawSprites();

}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}

  return false;




}