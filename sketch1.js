const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var world;
var ground, platform;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;
var bg;
var constrained_log;
var chain;
var ONSLING = 1;
var OFFSLING = 0;
var state = ONSLING;
var img1,img2;




function preload() {
  bg = loadImage("img/bg.png");
  img1=loadImage("img/sling1.png");
  img2=loadImage("img/sling2.png");
  getBackground();
}


function setup() {
  createCanvas(1250, 550);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(900, 510, 80, 80);
  box2 = new Box(1100, 510, 80, 80);
  box3 = new Box(900, 450, 80, 80);
  box4 = new Box(1070, 450, 80, 80);
  box5 = new Box(1030, 400, 80, 80);
  ground = new Ground(625, 550, width, 20);
  platform = new Ground(150, 420, 350, 250);
  pig1 = new Pig(1000, 510);
  pig2 = new Pig(1000, 450);
  log1 = new Log(1000, 455, 280, PI / 2);
  log2 = new Log(1000, 405, 280, PI / 2);
  log3 = new Log(940, 380, 180, PI / 6);
  log4 = new Log(1040, 380, 180, -PI / 8);
  bird = new Bird(230, 130);
  //constrained_log = new Log(200, 200, 50, 30, PI / 2);
  chain = new Slingshot(bird.body, { x: 230, y: 130 });




}
function draw() {
  background(bg);
  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  platform.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  //constrained_log.display();
  image(img1, 230, 98, 50, 200);
  bird.display();
  image(img2, 198, 115, 50, 100);
  chain.display();
  textSize(20);
  fill("white");
  stroke("grey");
  text("SCORE:" + score, 1080, 30);
  pig1.score();
  pig2.score();

  

  if (score == 0 && state == OFFSLING && bird.body.speed <= 2) {
    text("PRESS SPACE FOR ANOTHER CHANCE🙂", 200, 50);
  }



}

function mouseDragged() {
  if (state !== OFFSLING) {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  chain.fly()
  state = OFFSLING;


}

function keyPressed() {
  if (keyCode == 32 && state == OFFSLING && score == 0) {
    chain.attach(bird.body);
  }

}

async function getBackground() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hr = datetime.slice(11, 13);


  if (hr >= 06 && hr <= 16) {
    bg = loadImage("img/bg.png");
  } else {
    bg = loadImage("img/bg2.png");
  }

}
