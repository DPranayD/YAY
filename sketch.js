var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint  
var engine, world;


function preload()
{
    	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	GROUNDe = new ground(400,700,3200,20);
	paperBall = new Paper(200,415,70);
	Base1 = new Base(600,680,150,20);
	Base2 = new Base(665,650,20,150);
	Base3 = new Base(535,650,20,150);
	Slingshot = new Launcher(paperBall.body,{x:200,y:350});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);
  
  Engine.update(engine);
  paperBall.display(); 
  Base1.display();
  Base2.display();
  Base3.display();
  GROUNDe.display();
  Slingshot.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
		
	}
}

function mouseDragged() {
    Matter.Body.setPosition(paperBall.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly()
}

