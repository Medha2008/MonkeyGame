
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 200);

  var message = "This is a message";
 console.log(message)
  
  monkey= createSprite(50,160,20,50);
  monkey.addAnimation("sprite_0.png", monkey_running);
  monkey.addAnimation("sprite_1.png", monkey_running);
  

  monkey.scale = 0.1;
  
  ground = createSprite(200,190,400,20);
  ground.x = ground.width /2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug = false
  
  bananaGroup= createGroup();
    ObstaclesGroup= createGroup();
  
  score = 0;
  
}

function draw() {
  
  background(180);
  text("SurvivalTime: "+ score, 300,50);
  fill("black")

   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
   }
    
  
  monkey.collide(invisibleGround);


  drawSprites();
}
