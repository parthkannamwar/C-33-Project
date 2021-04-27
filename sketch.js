var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions= []

var divisionHeight=300;
var score =0,score2;
var particle,chances=0,a;
var gamestate="play";
var flag1=false;
var flag2=false;
var flag3=false,v;
var goimg;

function preload()
{
  goimg=loadImage("GO.png");
}

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 650, 10, 300));
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


}


function draw()
{

  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();
  

   textSize(30)
   fill("yellow")
   text("Score : "+score,5,25)

   fill("white")
   text("500",15,600)
   text("500",95,600)
   text("500",175,600)
   text("500",255,600)

   text("100",330,600)
   text("100",410,600)
   text("100",490,600)

   text("200",575,600)
   text("200",655,600)
   text("200",735,600)

for(var j=0; j<particles.length;j++)
{
  particles[j].display();
  particles[j].update();
}



if(chances>=5 )
{
  var time = frameCount/frameRate();

  if(time>10)
  {
  image(goimg,200,100,500,350);
  x.display();
  }
}


}



function mousePressed()
{
  
 
   if(mouseX<300 && mouseX>0)
   {
    flag1=true;
    chances++
   }
   else if(mouseX>=300 && mouseX<560)
   {
    flag2=true;
    chances++
   }
   else if(mouseX>=560 && mouseX<800)
   {
    flag3=true;
    chances++
   }
    
   
    particles.push(new Particle(mouseX, 10, 10)); 
   
  
}




