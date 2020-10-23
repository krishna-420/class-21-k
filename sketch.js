var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

gameObject1 = createSprite(50,200,40,60);
gameObject1.shapeColor= "yellow";

gameObject2 = createSprite(100,270,40,60);
gameObject2.shapeColor="purple";

gameObject3 =  createSprite(150,340,40,25);
gameObject3.shapeColor="orange";

gameObject4 = createSprite(770,400,100,30);
gameObject4.shapeColor="lightgreen";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if (touch(gameObject1,movingRect)){
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
 } 
 else {
  movingRect.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
 }
  drawSprites();
}
function touch(object1,object2){
  if (object1.x - object2.x < object1.width/2 +object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
     {
    return true;
}
else {
 return false;
}

}


