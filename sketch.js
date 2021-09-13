var naruto,  naruto_collided, naruto_running
var ground, invisible_ground, groundImage
var obs, obs_1, obs_2, obs_3, obs_4
var cloud, cloudGroup, cloudImage
var score = 0

var newImage

function preload(){
    naruto_running = loadAnimation("Naruto runninggif.gif");
    trex_collided = loadAnimation("fall-over-one, fall-over-two, fall-over-three");
    obs_1= loadAnimation("obstacle-1(1), obstacle-1(2), obstacle-1(3)")
    obs_2= loadAnimation("obstacle-2(1), obstacle-2(2), obstacle-2(3)")
    obs_3= loadAnimation("obstacle-3(1), obstacle-3(2), obstacle-3(3)")
    obs_4= loadAnimation("obstacle-4(1), obstacle-4(2), obstacle-4(3)")

    groundImage = loadImage("ground2.png");
    
    cloudImage = loadImage("cloud.png");
   
  }

  function setup() {
    createCanvas(600, 200);
  
    naruto = createSprite(50,160,20,50);
    naruto.addAnimation("running", naruto_running);
    naruto.addAnimation("collided",naruto_collided)
    trex.scale = 0.5;
    
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
    
    console.log("Hello"+ 5)
    
  }

  function draw() {
    background(180);
    text("Score " + score, 500, 60)
  
    
    if(keyDown("space")&& naruto.y >= 100) {
      naruto.velocityY = -10;
    }
    
    naruto.velocityY = naruto.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    naruto.collide(invisibleGround);
    score= score + Math.round(frameCount/60)          

    spawnClouds();
    spawnObstacles();
    drawSprites();
  }

  function spawnClouds() {

    if (frameCount % 60 === 0) {
      cloud = createSprite(600,100,40,10);
      cloud.addImage(cloudImage)
      cloud.y = Math.round(random(10,60))
      cloud.scale = 0.4;
      cloud.velocityX = -3;
      cloud.lifetime = 210
      cloud.depth = naruto.depth
      naruto.depth = naruto.depth + 1;
      }
    }

      function spawnObstacles() {
        if (frameCount % 60 === 0) {
          obs = createSprite(600, 170)
          obs.velocityX= -9
          var image= Math.round(random(1,6))
          switch(image){
            case 1:
              obs.addImage(obs_1)
              break;
              case 2:
                obs.addImage(obs_2)
                break;
                case 3:
              obs.addImage(obs_3)
              break;
              case 4:
              obs.addImage(obs_4)
              break;

                 
          }
          obs.scale=0.8
          obs.lifetime=210
        }
        }
        










