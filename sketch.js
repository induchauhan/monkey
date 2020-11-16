
var monkey , monkey_running,ground,g;
var banana ,bananaImage, obs, obstacleImage;
var bGroup, obsGroup;
var score=0;

function preload(){
  
  g=loadImage("images.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
      monkey = createSprite(100, 350,50,70);
      monkey.addAnimation("running",monkey_running);
      monkey.scale=0.15;
  
      ground = createSprite(200, 380,800,10);
      ground.velocityX=-4;
      ground.addImage("ground",g);
      ground.scale=2;
  
      bGroup=new Group();
      obsGroup=new Group();


}


function draw() {
        background(255);
          drawSprites();
          food();
          obstacles();
          stroke("black")
          textSize(20);
          fill("black");
          score=Math.round(frameCount/frameRate());
          text("Survival Time: " + score,100,50);
          if(keyDown("space"))
          {
            monkey.velocityY=-10;
          }
          monkey.velocityY=monkey.velocityY+0.8;
          if(ground.x<0)
          {
            ground.x=ground.width/2;
          }
          monkey.collide(ground);

}

function food(){
  if(frameCount%80===0)
  {
  banana=createSprite(400, 200,20,30);
  banana.addImage("banana",bananaImage);
  banana.scale=0.15;
  banana.y=Math.round(random(120,200));
  banana.velocityX=-4;
  banana.lifetime=100;
  bGroup.add(banana);
  }
}

function obstacles()
{
  if(frameCount%300===0)
  {
  obs=createSprite(400, 350,20,30);
  obs.addImage("obs",obstacleImage);
  obs.scale=0.15;
  obs.velocityX=-4;
  obs.lifetime=100;
  obsGroup.add(obs);
  }
}







