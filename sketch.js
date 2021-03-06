const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;

function setup() {
  createCanvas(3000,800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(600,600,1200,20);

  box1 = new Box(900,100,60,60);
  box2 = new Box(900,100,60,60);
  box3 = new Box(900,100,60,60);
  box4 = new Box(900,100,60,60);
  box5 = new Box(900,100,60,60);
  box6 = new Box(900,100,60,60);

  box7 = new Box(800,100,60,60);
  box8 = new Box(800,100,60,60);
  box9 = new Box(800,100,60,60);
  box10 = new Box(800,100,60,60);
  box11 = new Box(800,100,60,60);
  box12 = new Box(800,100,60,60);

  ball = new Ball(200,200,80,80);

  rope = new Rope(ball.body,{x:580,y:50});

  Engine.run(engine);
}

function draw() {

  background(0);  

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  ball.display();

  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}