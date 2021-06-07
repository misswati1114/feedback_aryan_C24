const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var side1,side2,side3;

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	


	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 668, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	//create peper objects and side objects
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //drawSprites();
 //display paper and the sides of box
	
	
	
 rect(ground.position.x,ground.position.y,width, 10)
}

function keyPressed() {
//apply force when UP_ARROW is pressed
	
}
