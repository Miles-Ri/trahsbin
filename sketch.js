
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimg=loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(65, 540, 75);

	ground = new Ground(200, 580, 3000, 50, 20);
 
	side0 = new Dustbin(610, 463, 50, 200);
	side1 = new Dustbin(400, 463, 50, 200);
	side2 = new Dustbin(505, 583, 260, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine)

  paper.display()
  ground.display()
  side0.display()
  side1.display()
  side2.display()
  image(dustbinimg,500,400,200,230)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:500, y: -1000})
	}

  }

