const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world;
var ground;
var box1;

function setup() {
  createCanvas(1250,550);
  engine = Engine.create();
  world = engine.world;
  ground_options = { isStatic: true };
  ball_options = { restitution: 1.2 };
  ground = Bodies.rectangle(400,400,800,20, ground_options);
  ball = Bodies.circle(300,0,10, ball_options)
  World.add(world, ground);
  World.add(world, ball);
  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);
  box1 = new Box();

}
function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  
  rect(ground.position.x, ground.position.y, 800, 20);
  circle(ball.position.x, ball.position.y, 20);

 

 }
