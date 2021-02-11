const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle = 0;
// var gamestate = PLAY;
// var gametate = END;
function setup() {
  createCanvas(900,900);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(240,height,1500,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  textSize(20)
  text("Particle : "+particle,20,30);
  text("Score : "+score,400,30);
  text(" "+500,20,650);
  text(" "+500,100,650);
  text(" "+500,180,650);
  text(" "+100,260,650);
  text(" "+100,340,650);
  text(" "+100,420,650);
  text(" "+100,500,650);
  text(" "+100,580,650);
  text(" "+200,660,650);
  text(" "+200,740,650);
  text(" "+200,820,650);
  Engine.update(engine);
  ground.display();
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  if(frameCount%160===0){
    particles.push(new Particle(mouseX, 10,10));
    particle++;
  }
  // if(particle!=null)
  // {
  //   // particle.display();
  //   if(particle.body.position.y > 760)
  // {
  //   if(particle.body.position.x < 300)
  // {
  //   score = score + 500;
  //   particle = null;
  //   // if(count>= 5) gameState ="end";
  // }
  //   if(particle.body.position.x > 301 && particle.body.position.x < 600)
  // {
  //   score = score + 100;
  //   particle = null;
  //   // if(count>= 5) gameState ="end";
  // }
  //   if(particle.body.position.x > 601 && particle.body.position.x < 900)
  // {
  //   score = score + 200;
  //   particle = null;
  //   // if(count>= 5) gameState ="end";
  // }
  // }
  // }
}
// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

// var particles = [];
// var plinkos = [];
// var divisions = [];

// var divisionHeight=300;
// // var score =0;
// function setup() {
//   createCanvas(480, 800);
//   engine = Engine.create();
//   world = engine.world;
//   ground = new Ground(240,height,480,20);
// //  ground = new Ground(width/2,height,width,20);


//    for (var k = 0; k <=width; k = k + 80) {
//      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
//    }


//     for (var j = 40; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,75));
//     }

//     for (var j = 15; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,175));
//     }

//      for (var j = 40; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,275));
//     }

//      for (var j = 15; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,375));
//     }

    

    
// }
 


// function draw() {
//   background("0");
//   // textSize(20)
//  //text("Score : "+score,20,30);
//  engine = Engine.create();
// //  world = engine.world;
//  ground.display()
  
//    for (var l = 0; l < plinkos.length; l++) {
     
//      plinkos[l].display();
     
//    }
//    for (var j = 0; j < particles.length; j++) {
   
//     particles[j].display();
//   }
//    if(frameCount%60===0){
//      particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
//     //  score++;
//    }
//    for (var k = 0; k < divisions.length; k++) {
     
//      divisions[k].display();
//    }
// }