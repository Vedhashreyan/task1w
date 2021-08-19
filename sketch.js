var home=0
var play = 1
var end = 2
var gamestate = home
var collected = 0
var bg1img, routetext1, routetext1Img
var startImg,playerImg
var waste1Img,waste2Img,waste3Img,waste4Img
var endImg, end2Img
var rightImg , leftImg , upImg , downImg

function preload(){
  bg1img = loadImage("bedroom.jpg")
  routetext1Img = loadImage("routetext1.png")
  startImg = loadImage("start.png")
  playerImg = loadAnimation("walking1.png","walking2.png","walking3.png","walking4.png","walking5.png","walking6.png")
  waste1Img = loadImage("waste1.png")
  waste2Img = loadImage("waste2.png")
  waste3Img = loadImage("waste3.png")
  waste4Img = loadImage("waste4.png")
  endImg = loadImage("end.png")
  end2Img = loadImage("end2.png")
  rightImg = loadImage("right.png")
  leftImg = loadImage("left.png")
  upImg = loadImage("up.png")
  downImg = loadImage("down.png")
  
}
function setup(){
  createCanvas(windowWidth,windowHeight);

  routetext1 = createSprite(width/2,height/2,100,100)
  routetext1.addImage(routetext1Img)
  routetext1.scale=0.5

  start=createSprite(width/2,height/2+100,100,100);
  start.addImage(startImg)
  start.scale=0.5
  start.visible=false
  
  player = createSprite(width/2,height/2,30,100)
  player.addAnimation("player",playerImg)
  player.scale=1
  player.visible=false
  
  waste1 = createSprite(width/2-200,100,100,100)
  waste2 = createSprite(width/2+200,height/2-200,100,100)
  waste3 = createSprite(width/2-(width/2-300),height/2-(height/2-100),100,100)
  waste4 = createSprite(width/2+200,height/2+200,100,100)
  waste5 = createSprite(width/2,height/2+200,100,100)
  

  waste1.addImage(waste1Img)
  waste2.addImage(waste2Img)
  waste3.addImage(waste3Img)
  waste4.addImage(waste4Img)
  waste5.addImage(waste4Img)

  waste1.scale = 0.1
  waste2.scale = 0.1
  waste3.scale = 0.1
  waste4.scale = 0.1
  waste5.scale = 0.1

  
  waste1.visible=false
  waste2.visible=false
  waste3.visible=false
  waste4.visible=false
  waste5.visible=false
  
  up=createSprite(width-100,height-130,40,40)
  down=createSprite(width-100,height-50,40,40)
  right=createSprite(width-(width-130),height-50,40,40)
  left=createSprite(width-(width-50),height-50,40,40)

  end = createSprite(width/2,height/2,100,100)
  end.addImage(endImg)
  end.scale=0.5

  end2 = createSprite(width/2,height/2+100,100,100)
  end2.addImage(end2Img)
  end2.scale=0.5

  end.visible=false
  end2.visible=false

  up.addImage(upImg)
  down.addImage(downImg)
  right.addImage(rightImg)
  left.addImage(leftImg)

  up.scale=0.1
  down.scale=0.1
  right.scale=0.1
  left.scale=0.1

  up.visible=false
  down.visible=false
  right.visible=false
  left.visible=false 
}

function draw() {
  //set background to white
  background("#a9d6c2");
  if (gamestate===home){
   start.visible=true
   textSize(20);
  
}
  if(mousePressedOver(start)){
    gamestate=play
  }
  if(gamestate===play){
    background(bg1img)
    routetext1.visible=false
    start.visible=false; 
    player.visible=true
    
    waste1.visible=true
    waste2.visible=true
    waste3.visible=true
    waste4.visible=true
    waste5.visible=true
    
    
     
    up.visible=true
    down.visible=true
    right.visible=true
    left.visible=true
    
    textSize(25)
    fill("black")
    text("Collected "+collected + "/5",width/2-50,50)
  }
  if(player.x>width-300 || player.x<300){
    player.x=width/2
  }
  if(player.y>height-100 || player.y<100){
    player.y=height/2
  }
  if(keyDown("d")||keyDown("right")||mousePressedOver(right)){
    player.x=player.x+5
    }
  if(keyDown("a")||keyDown("left")||mousePressedOver(left)){
    player.x=player.x-5
    }
  if(keyDown("w")||keyDown("up")||mousePressedOver(up)){
    player.y=player.y-5
    }
  if(keyDown("s")||keyDown("down")||mousePressedOver(down)){
    player.y=player.y+5
    }
  if(player.isTouching(waste1)){
    collected=collected+1
    waste1.destroy()
  }
  if(player.isTouching(waste2)){
    collected=collected+1
    waste2.destroy()
  }
  if(player.isTouching(waste3)){
    collected=collected+1
    waste3.destroy()
  }
  if(player.isTouching(waste4)){
    collected=collected+1
    waste4.destroy()
  }
  if(player.isTouching(waste5)){
    collected=collected+1
    waste5.destroy()
  }
  if(collected===5){
    gamestate=end;
  }
  if(gamestate===end){
    player.visible=false
    end.visible=true
    end2.visible=true
    right.visible=false
    left.visible=false
    up.visible=false
    down.visible=false
    background('#a9d6c2')
    
  }
 
   drawSprites();

  
}