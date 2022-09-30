var bgImg,bg;
var player
var shooterImg,shooter_shooting

function preload(){
  bgImg = loadImage("assets/bg.jpeg")
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting= loadImage("assets/shooter_3.png");
}

function setup() {
createCanvas(windowWidth,windowHeight)
 bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
player=createSprite(displayWidth-1150,displayHeight-300,50,50)
player.addImage(shooterImg)
player.scale = 0.5
player.debug=true
player.setCollider("rectangle",0,0,200,470)
}


function draw() {
background(0)
if(keyDown("DOWN_ARROW")||touches.length>0)
{
    player.y=player.y+20
}
if(keyDown("UP_ARROW")||touches.length>0)
{
    player.y=player.y-20
}
if(keyWentDown("space"))
{
    player.addImage(shooter_shooting)
}
else if(keyWentUp("space"))
{
    player.addImage(shooterImg)

}

drawSprites()
}
