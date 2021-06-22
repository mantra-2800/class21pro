var bg,sleep,eat,brush,gym,drink,move,bath;
var astronaut;
//var invisible1,invisible2,invisible3,invisible4;

function preload(){
  bgmi=loadImage("images/iss.png");
  sleep1=loadAnimation("images/sleep.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
  brush=loadAnimation("brush.png"); gym=loadAnimation("images/gym11.png","images/gym12.png","images/gym11.png");
  drink=loadAnimation("drink1.png","drink2.png"); 
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}
function setup() {
  createCanvas(450, 300);
  
 bg = createSprite(200,130);
 bg.addImage(bgmi);
bg.scale=0.1;
  
  
astronaut=createSprite(180,150)
astronaut.addAnimation("sleeping",sleep1);
astronaut.scale=0.1;

  
   /*invisible1=createSprite(450,180,20,380);
  invisible1.visible=true;
  invisible2=createSprite(200,320,480,20);
  invisible2.visible=true;
  invisible3=createSprite(200,10,450,20);
  invisible3.visible=true;
  invisible4=createSprite(180,450,380,20);
  invisible4.visible=true;*/
}

function draw() {
  background(220);
 

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.y=150;
astronaut.changeAnimation("brushing");
//astronaut.y=350;
astronaut.velocityX= 0;
astronaut.velocityY= 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.y=180;
  astronaut.changeAnimation("gyming");
  astronaut.setVelocity(0,0);
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.setVelocity(0,0);
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.setVelocity(0,0);
}

if(keyDown("m")){
  astronaut.addAnimation("flying",move);
  astronaut.changeAnimation("flying");
  astronaut.setVelocity(1,1)
}
edges=createEdgeSprites();
astronaut.bounceOff(edges);
/*astronaut.bounceOff(invisible1);
astronaut.bounceOff(invisible2);
astronaut.bounceOff(invisible3);
//astronaut.bounceoff(invisible4);*/

 
  drawSprites();
fill("white")
   text("PRESS ARROW KEY AND ANIMATIONS FOR DAILY ROUTINE",50,20);  
}

