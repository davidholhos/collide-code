var movingRect, fixedRect;

function setup() {
  createCanvas(1000,900);
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(400,400,200,50);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }
  
  
  drawSprites();
}