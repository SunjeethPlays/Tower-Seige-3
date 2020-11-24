const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, platform;

var stone;
var sling;

var brick;

var scoree = 0;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,590,1200,20);
  platform = new Ground (500,400,300,20);

  stone = new Hexagon (100,200,70,70);
  sling = new Sling (stone.body,{x:100,y:300})

  brick = new Box (500,350,50,30);
  brick1 = new Box (450,350,50,30);
  brick2 = new Box (400,350,50,30);
  brick3 = new Box (550,350,50,30);
  brick4 = new Box (600,350,50,30);
  brick5 = new Box (500,310,50,30);
  brick6 = new Box (450,310,50,30);
  brick7 = new Box (400,310,50,30);
  brick8 = new Box (550,310,50,30);
  brick9 = new Box (600,310,50,30);
  brick10 = new Box (500,280,50,30);
  brick11 = new Box (450,280,50,30);
  brick12 = new Box (400,280,50,30);
  brick13 = new Box (550,280,50,30);
  brick14 = new Box (600,280,50,30);
  brick15 = new Box (500,250,50,30);
  brick16 = new Box (450,250,50,30);
  brick17 = new Box (400,250,50,30);
  brick18 = new Box (550,250,50,30);
  brick19 = new Box (600,250,50,30);
  brick20 = new Box (500,210,50,30);
  brick21 = new Box (450,210,50,30);
  brick22 = new Box (550,210,50,30);
  brick23 = new Box (500,180,50,30);
  brick24 = new Box (450,180,50,30);
  brick25 = new Box (550,180,50,30);
  brick26 = new Box (500,140,50,30);

}

function draw() {
  background("grey");  

  Engine.update(engine);

  ground.display();
  platform.display();

  stone.display();
  sling.display();

  brick.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();
  brick25.display();
  brick26.display();

  brick.score();
  brick1.score();
  brick2.score();
  brick3.score();
  brick4.score();
  brick5.score();
  brick6.score();
  brick7.score();
  brick8.score();
  brick9.score();
  brick10.score();
  brick11.score();
  brick12.score();
  brick13.score();
  brick14.score();
  brick15.score();
  brick16.score();
  brick17.score();
  brick18.score();
  brick19.score();
  brick20.score();
  brick21.score();
  brick22.score();
  brick23.score();
  brick24.score();
  brick25.score();
  brick26.score();

  drawSprites();

  textSize(30);
  fill("white");
  text("Drag The Hexagonal Stone And Release It, To Throw It towards The Blocks",50,30);
  text("Press Space To Attach The Hexagonal Stone To Your Catapult After you Throw It",50,70);
  text("score : " + scoree,750,40)

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){

    Matter.Body.setPosition(stone.body, {x:100,y:300});

    sling.attach(stone.body);

  }
}

