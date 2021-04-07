const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowflake1, snowflake2,snowflake3,snowflake4,snowflake5,snowflake6,snowflake7,snowflake8,snowflake9,snowflake10,snowflake11,snowflake12;
var character,person1;
var ground;

function preload(){
  backgroundImg=loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  //createSprite(400, 200, 50, 50);

  snowflake1= new Character(20,-20);
  snowflake2= new Character(100,-20);
  snowflake3= new Character(150,-20);
  snowflake4= new Character(800,-15);
  snowflake5= new Character(700,-20);
  snowflake6= new Character(500,-30);
  snowflake7= new Character(550,-50);
  snowflake8= new Character(600,-30);
  snowflake9= new Character(650,-40);

  

  ground=new Ground(400,385,1000,40);

  person1=new Person(400,300);

  snowGroup=createGroup();

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  snowflake1.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
  snowflake5.display();
  snowflake6.display();
  snowflake7.display();
  snowflake8.display();
  snowflake9.display();



  person1.display();

  //character.display();
  ground.display();
  
  
  
  drawSprites();
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
   // Matter.Body.applyForce(person1.body,person1.body.position,{x:100,y:0})
  }
  if(keyCode === LEFT_ARROW){
    //Matter.Body.applyForce(person1.body,person1.body.position,{x:-100,y:0})
  }
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(person1.body,person1.body.position,{x:0,y:500})
  }
}
function snowFlakes(){
  if(frameCount % 60 === 0 ){
    position= Math.round(random(1,2));
    snowflake=new Character(200,300);

    r=Math.round(random(1,2));
    if(r==1){
      this.image=loadImage("snow4.webp");
    }
    else if(r==2){
      this.image=loadImage("snow5.webp");
    }
    if(position==1){
      snowflake.y=500;
      snowflake.velocityY=-7;
    }
    else{
      if(position==2){
        snowflake.y=200;
        snowflake.velocityY=-7;
      }
    }
    snowflake.x=Math.round(random(200,400));
    snowflake.setLifetime=2000;

    snowGroup.add(snowflake);
  }
}

