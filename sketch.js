var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obstecle1i=loadImage("obstacle1.png")
  obstecle2i=loadImage("obstacle2.png")
  obstecle3i=loadImage("obstacle3.png")
  obstecle4i=loadImage("obstacle4.png")
  obstecle5i=loadImage("obstacle5.png")
  obstecle6i=loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  obstecleGroup=new Group()
  cloudGroup=new Group()

  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -15;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  if(obstecleGroup.isTouching(trex)){
ground.velocityX=0
obstecleGroup.setVelocityXEach(0)
cloudGroup.setVelocityXEach(0)

  }
  //spawn the clouds
  spawnClouds();
spwnObstecles()

  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    cloudGroup.add(cloud)
    }
}
function spwnObstecles( ) {
  if(frameCount % 80 === 0){
    obstecle=createSprite(600,165,40,10)
    var m=Math.round(random(1,6))
switch(m){
  case 1:obstecle.addImage(obstecle1i)
         break;
  case 2:obstecle.addImage(obstecle2i)
         break;
  case 3:obstecle.addImage(obstecle3i)
         break;
   case 4:obstecle.addImage(obstecle4i)
         break;
   case 5:obstecle.addImage(obstecle5i)
         break;
   case 6:obstecle.addImage(obstecle6i)
         break;


}
obstecle.lifetime=210               
obstecle.scale=0.6
obstecle.velocityX=-4
obstecleGroup.add(obstecle)
  }

}

