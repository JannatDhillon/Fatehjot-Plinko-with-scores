const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,wall1,wall2
var particle
var plinkos=[]
var divisions=[]
var x;
var gameState = "play";
var count=5
var score=0

function setup() {
  createCanvas(480,675);
 
  engine = Engine.create();

  world = engine.world;

  ground=new Ground(240,670,width,20)
  wall1=new Ground(0,displayHeight/2,10,displayHeight)
  wall2=new Ground(480,displayHeight/2,10,displayHeight)

  for (var i=0;i<=width;i=i+80){
    divisions.push(new Div(i,550,10,250))
  }
  for (var i=15;i<=width;i=i+60){
    plinkos.push(new Plinko(i,60))  
  }
  for (var i=45;i<=width;i=i+60){
    plinkos.push(new Plinko(i,100))  
  }
  for (var i=15;i<=width;i=i+60){
    plinkos.push(new Plinko(i,140))  
  }
  for (var i=45;i<=width;i=i+60){
    plinkos.push(new Plinko(i,180))  
  }
  for (var i=15;i<=width;i=i+60){
    plinkos.push(new Plinko(i,220))  
  }
  for (var i=45;i<=width;i=i+60){
  plinkos.push(new Plinko(i,260))  
  }
  for (var i=15;i<=width;i=i+60){
  plinkos.push(new Plinko(i,300))  
  }
  for (var i=45;i<=width;i=i+60){
  plinkos.push(new Plinko(i,340))  
  }
  

}

function draw() {
  background(0);
  textSize(20)
  fill("white")
  text("500",255,450)
  text("2000",335,450)
  text("1500",420,450)
  text("10000",177,450)
  text("1000",100,450)
  text("5000",20,450)
  text("Score:"+score,20,20)
  text("Tries Left-"+count,370,20)

  Engine.update(engine);

  if(gameState==="end"){
    textSize(50);
    text("GameOver",150,250)
  }

  ground.display(); 
  wall1.display()
  wall2.display();
  for(var u=0;u<plinkos.length;u=u+1){
    plinkos[u].display();
   } 
  for(var d=0;d<divisions.length;d=d+1){
    divisions[d].display();
    }    
  if (particle!=null){
    particle.display();

    if(particle.body.position.y>450){
      if(particle.body.position.x>0&&particle.body.position.x<80){
        score=score+5000
      }
      else if(particle.body.position.x>80&&particle.body.position.x<160){
        score=score+1000
      }
      else if(particle.body.position.x>160&&particle.body.position.x<240){
        score=score+10000
      }
      else if(particle.body.position.x>240&&particle.body.position.x<320){
        score=score+500
      }
      else if(particle.body.position.x>320&&particle.body.position.x<400){
        score=score+1000
      }
      else if(particle.body.position.x>400&&particle.body.position.x<480){
        score=score+1500
      }
      particle=null
      if (count===0){
        gameState="end"
      }
    }
  }
  
  
}

function keyPressed(){
  if(keyCode===32){
  if(gameState!=="end"){
    count=count-1
    particle=new Particle(random(50,350),0)
  }
}
}