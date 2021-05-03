var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var gameState = "start";
var count = 0;

var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  text ("score: " + score, 25, 30)

textSize (18);
text ("100", 20, 500);

text ("100", 100, 500);

text ("100", 180, 500);

text ("100", 260, 500);

text ("100", 340, 500);

text ("500", 420, 500);

text ("500", 500, 500);

text ("500", 580, 500);

text ("500", 660, 500);

text ("500", 740, 500);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
   if (particle!=undefined) {
     
     particle.display();
      if (particle.body.position.y>760){
        if (particle.body.position.x>420)
        score = score + 500;
        console.log (particle.body.position.x);
        console.log (particle.body.position.y)
        particle = null;
        if (count >=5){
          gameState = "end";
        }
        }

      }
   }



function mousePressed () {
if (gameState !== "end") {
count++;
//particle = particles.push(new Particle(mouseX, 10, 10));
particle = new Particle(mouseX, 10,10)
}
}
