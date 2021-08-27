const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var engine , world;
var background_img , background1;
var Ghost , Ghost_img
var gameState = 0;
function preload(){
  background_img = loadImage('Background.jfif');
  Ghost_img=loadImage('Ghost.jfif');
}
function setup() {
  createCanvas(displayWidth , displayHeight);
  engine = Engine.create();
  world = engine.world
  background1 = createSprite(400,300,600,800);
  background1.addImage(background_img);

  
  background1.scale = 2.5
  arrow = new Arrow(110,245);
  sling = new SlingShot(arrow.body , {x:95 , y:265});
 // ghost = new Ghost(random(200,370),random(5,100));

  
}

function draw() {
  background(255);
  Engine.update(engine);
  background1.velocityX = -2;
  if(background1.x<100){
      background1.x = background1.width/2;
  }
  obstacle()
  drawSprites();
 // ghost.display();
  arrow.display();
  sling.display();





}

function obstacle(){
  if(frameCount%100==0){
    Ghost = createSprite(random(200,370),random(5,100))
    Ghost.addImage(Ghost_img);
    Ghost.velocityY = 2
    Ghost.scale = 0.3;
    Ghost.lifetime = 250;
  }
  
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body , {x:mouseX,y:mouseY})
}

function mouseReleased(){
  gameState = 1
  sling.fly(Ghost);

}

