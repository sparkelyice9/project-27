
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5 ;
var ground1, roofObject;
//var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,350,25);
	bobObject2 = new Bob(450,350,25);
	bobObject3 = new Bob(500,350,25);
	bobObject4 = new Bob(350,350,25);
	bobObject5 = new Bob(300,350,25);
	ground1 = new Ground(400,700,600,20);
	roofObject = new Roof(400,150,350,20);
	//rope1 = new rope(400, 400, 100, 0 );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black"); 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ground1.display();
  roofObject.display();
  //rope1.display();
  
  drawSprites();
 
}



