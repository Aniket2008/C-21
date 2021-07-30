var fixedRect, movingRect;
var obj1,obj2, obj3,obj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1= createSprite(100,100,40,40);
  obj1.shapeColor= "orange"
  obj2= createSprite(100,100,40,40);
  obj2.shapeColor= "orange"
  obj= createSprite(100,100,40,40);
  obj1.shapeColor= "orange"
  obj1= createSprite(100,100,40,40);
  obj1.shapeColor= "orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
console.log(movingRect.x-fixedRect.x);
  if (isTouching()) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
  

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
  return false;
}