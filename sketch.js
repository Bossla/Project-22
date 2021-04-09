var starImg, fairyImg, bgImg;
var fairy , fairyVoice, fairyHand;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairyHand = createSprite(260,520,40,10)
	fairyHand.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed()

	if(star.collide(fairyHand)){
		fairyVoice.play();
	}

  drawSprites();

}

function keyPressed() {

	if(keyWentDown(RIGHT_ARROW)){
		fairy.x = fairy.x + 20;
		fairyHand.x = fairyHand.x + 20;
	}

	if(keyWentDown(LEFT_ARROW)){
		fairy.x = fairy.x - 20;
		fairyHand.x = fairyHand.x - 20;
	}

	if(keyWentDown(DOWN_ARROW)){
		star.velocityY = 10;
	}
}
