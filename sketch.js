
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  Rect1 = createSprite(200, 100, 50, 50);
  Rect1.shapeColor = "green";

  Rect2 = createSprite(300, 100, 50, 50);
  Rect2.shapeColor = "green";

  Rect3 = createSprite(400, 100, 50, 50);
  Rect3.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisiontest(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(collisiontest(movingRect,Rect1)){
    movingRect.shapeColor="blue";
    Rect1.shapeColor="blue";
  }
  else if(collisiontest(movingRect,Rect2)){
    movingRect.shapeColor="blue";
    Rect2.shapeColor="blue";
  }
  else if(collisiontest(movingRect,Rect3)){
    movingRect.shapeColor="blue";
    Rect3.shapeColor="blue";
  }
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    Rect1.shapeColor="green";
    Rect2.shapeColor="green";
    Rect3.shapeColor="green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function collisiontest(r1,r2){
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2
    && r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


