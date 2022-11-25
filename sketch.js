const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, right_wall,left_wall, top_wall; 
var ball;
var bt1, bt2;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground(200, 390, 400, 20);
  right_wall = new Ground(390, 200, 20, 400);
  left_wall = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);


  var ball_options = {
    restitution: 0.1,
    frictionAir: 0.005,
  }
  ball = Bodies.circle(300, 50, 25, ball_options);
  World.add(world, ball);

  bt1 = createImg("right.png");
  bt1.position(220, 30);
  bt1.size(50, 50);
  bt1.mouseClicked(hForce);

  bt2 = createImg("push.png");
  bt2.position(20, 30);
  bt2.size(50, 50);
  bt2.mouseClicked(vForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  right_wall.show();
  left_wall.show();
  top_wall.show();
  ellipse(ball.position.x, ball.position.y, 25)
}

function hForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05, y: 0})
}
function vForce(){
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.05})
}

