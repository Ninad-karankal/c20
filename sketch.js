var movingR,fixedR;

function setup() {
  createCanvas(800,400);
  movingR=createSprite(400, 200, 50, 50);
  fixedR=createSprite(200, 200, 70, 70);
  movingR.shapeColor="green";
  fixedR.shapeColor="green";
}

function draw() {
  background(0);  
  movingR.x=mouseX;
  movingR.y=mouseY;
  if(movingR.x-fixedR.x< movingR.width/2+fixedR.width/2
    && fixedR.x-movingR.x<movingR.width/2+fixedR.width/2
    && movingR.y-fixedR.y< movingR.height/2+fixedR.height/2
    && fixedR.y-movingR.y<movingR.height/2+fixedR.height/2){
    movingR.shapeColor="red";
    fixedR.shapeColor="red";
  }else {
    movingR.shapeColor="green";
  fixedR.shapeColor="green";
  }
  drawSprites();
}