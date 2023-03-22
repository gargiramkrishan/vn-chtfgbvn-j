var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;


var life =3;
var score=0;
var gameState=1

var blast = false;

var blastt = false;

var gameover,gameoverimg;

function preload(){
  gunImg = loadImage("gun1.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
  blastImg = loadImage("blast.png")
  gameoverimg = loadImage("istockphoto-1172810020-170667a.jpg")
}
function setup() {
  createCanvas(800, 600);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gAMR()
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if(bulletGroup.isTouching(bluebubble))
    {
      bluebubble.addImage(blastImg);
      blast = true
      score += 1
      if(blast == true)
      {
        bluebubble.velocityY = +20;
        bluebubble.velocityX = 0;
      }
    }
    if(bulletGroup.isTouching(redbubble))
    {

      redbubble.addImage(blastImg)
      score += 1
      blast = true
      if(blast == true)
      {
        redbubble.velocityY = +25;
        redbubble.velocityX = 0;
      }
    }
    if(gameState == 2)
    {
       image(gameoverimg,300,400,800,900)
    }
    drawSprites();
  }
    
  
}

function drawblueBubble(){
  if(!blastt)
  {
    bluebubble = createSprite(800,random(20,780),40,40);
    bluebubble.addImage(blueBubbleImg);
    bluebubble.scale = 0.1;
    bluebubble.velocityX = -8;
    bluebubble.lifetime = 400;
    blueBubbleGroup.add(bluebubble);
}
}
function drawredBubble(){
  if(!blastt)
  {
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}
}
function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}
function gAMR()
{
  if(blueBubbleGroup.collide(backBoard))
  {
    life = life - 1;
  }
  if(redBubbleGroup.collide(backBoard))
  {
    life = life - 1;
  }
  if(life <= 0)
  {
    gun.destroy()
    blastt = true;
    gameState = 2
  }
}