
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Paper = new paper(100, 400, 50);

	box = new DustBin(600, 450, 100, 20);
	
	ground = new Ground(400, 460, 800, 30);
	
	Engine.run(engine);

	console.log(box);
}


function draw() {
  rectMode(CENTER);
  background(200);

  Paper.display();
  box.display(); 
  ground.display();
  
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:270,y:-485});
	}
}

