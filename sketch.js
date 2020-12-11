var monkey,monkey_img
var bananaImage

var obstacleImage,bananaImage

var obstaclesGroup
var bananaGroup
var ground,groundImg

var score = 0;

function preload(){
 groundImg=loadImage("jungle.jpg");

monkey_img =
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

bananaImage = loadImage("banana.png");

obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
             
  ground = createSprite (380,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.addImage(groundImg)
   monkey = createSprite (70,250,10,50)
  monkey.addAnimation("monkey",monkey_img)
  monkey.scale=0.2
  bananaGroup = new Group();
  obstaclesGroup = new Group();
edges = createEdgeSprites() 
}

function draw() {
  background(220);
   stroke("white")
  textSize(20)
  fill("white")
 
 
  
  
      if(keyDown("space")) {
    monkey.velocityY = -10;
  }
      monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 200){
    ground.x = ground.width/2;
  }
  if (bananaGroup.isTouching(monkey)) {
    score = score +2
  bananaGroup.destroyEach()
    monkey.scale = 0.2 
  }
   
     
 
    if (monkey.isTouching(obstaclesGroup)) {
      monkey.scale = 0.12
      obstaclesGroup.destroyEach()
    }
    monkey.collide(edges)
    
  


  
  
 banana()
  obstacles()
  drawSprites()
  text("Score: "+ score, 250,50);
}

function banana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
                 
    banana.scale = 0.07;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
    
    
    bananaGroup.add(banana);
  }
  
}

function obstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(200,350,10,40);
    obstacle.velocityX = -4;  
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
   obstacle.addImage(obstacleImage)
    obstaclesGroup.add(obstacle)
  }
}