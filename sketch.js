var bg, arrow, bow, person, platform;
var bgImg, arrowImg, bowImg, personImg, platformImg;
var arrow1;
var player1;
var ball, ballImg;
var ballGroup;
var arrowGroup;
var score;


function preload(){
  bgImg = loadImage("background.jpg")
  arrowImg = loadImage("arrow.png")
  bowImg = loadImage("bow.png")
  personImg = loadImage("person.png")
  platformImg = loadImage("platform.png")
  ballImg = loadImage("ball.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  bg.addImage(bgImg)
  bg.scale = 1.5;

  

  platform = createSprite(200, windowHeight/2, 60, 25)
  platform.addImage(platformImg)
  platform.scale = 0.4;
  person = createSprite(200, windowHeight/2-150, 10, 25)
  person.addImage(personImg)
  person.scale = 0.4;
  bow = createSprite(280, windowHeight/2-150, 10, 15)
  bow.addImage(bowImg)
  bow.scale = 0.1;
  //arrow1 = new Arrow(bow.x, bow.y, 30, 5)
  ballGroup = new Group();
  arrowGroup = new Group();
  score = 0;
  
}
   
function draw() {
  background(220);
  //arrow1.display();




  ball1();
  drawSprites();

  fill("black");
textSize(50);
  text("Score:" + score, windowWidth-250, 50)

  if(keyDown("space")){
    createArrow();
  }
  
if(keyDown("DOWN_ARROW")){
  person.y += 10;
  platform.y += 10;
  bow.y += 10;
  //arrow.y = bow.y;
}
if(keyDown("UP_ARROW")){
  person.y -= 10;
  platform.y -= 10;
  bow.y -= 10;
  //arrow.y = bow.y;

}







if(arrowGroup.isTouching(ballGroup)){
  arrowGroup.destroyEach();
  ballGroup.destroyEach();
  score = score + 1;
}

}

function ball1(){
  if(frameCount%120==0){
    ball = createSprite(windowWidth-100, 0, 25, 25)
    ball.addImage(ballImg)
    ball.scale = 0.05
    ball.x = random(windowWidth-300, windowWidth-100)
    ball.velocityY = 5;
    ballGroup.add(ball);
  }
}

function createArrow(){
  
    arrow = createSprite(280, bow.y, 30, 5)
    arrow.addImage(arrowImg)
    arrow.scale = 0.1
    arrow.y = bow.y;
    arrow.velocityX = 50;
    arrowGroup.add(arrow);

}