const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var mC;

var engine;
var world;

var g1;
var vb1;

var b1;

function preload()
{
   b1 = loadImage("cbg.jpg");
}

function setup()
{
  const canvas = createCanvas(1200,550);
  
  engine = Engine.create();
  world = engine.world;
  
  const mouse = Mouse.create(canvas.elt);
  const options = {mouse:mouse};
  mC = Matter.MouseConstraint.create(engine,options);
  World.add(world,mC);

  g1 = new ground(600, 530);

  //vb1 = new proc(730, 50);
  //vb2 = new proc(730, 100);
  //vb3 = new proc(730, 150);
  //vb4 = new proc(730, 200);
  //vb5 = new proc(730, 250);
  //vb6 = new proc(730, 300);
  //vb7 = new proc(730, 350);
  //vb8 = new proc(730, 400);
  //vb9 = new proc(730, 450);
  //vb10 = new proc(730, 500);


  s1 = new superMan(200, 200);

  //vb11 = new proc(870, 50);
  //vb22 = new proc(870, 100);
  //vb33 = new proc(870, 150);
  //vb44 = new proc(870, 200);
  //vb55 = new proc(870, 250);
  //vb66 = new proc(870, 300);
  //vb77 = new proc(870, 350);
  //vb88 = new proc(870, 400);
  //vb99 = new proc(870, 450);
  //vb110 = new proc(870, 500);

  p1 = new power(s1.body, {x:200 , y:200});

  m1 = new missile(800,200);

}
 
function draw()
{
  Engine.update(engine);  
  
  background(b1);
    
   
    g1.display();

    //vb1.display();
    //vb2.display();
    //vb3.display();
    //vb4.display();
    //vb5.display();
    //vb6.display();
    //vb7.display();
    //vb8.display();
    //vb9.display();
    //vb10.display();

    //vb11.display();
    //vb22.display();
    //vb33.display();
    //vb44.display();
    //vb55.display();
    //vb66.display();
    //vb77.display();
    //vb88.display();
    //vb99.display();
    //vb110.display();

    //p1.display();

    s1.display();
    m1.display();

    push();
    fill("black");
    textSize(15);
    text("use arrow keys and mouse to control the plane", 450, 50);
    pop();

    //if(this.p1.bodyA === s1.body)
    //{
      //push();
      //strokeWeight(3);
      //stroke("black");
      //line(this.s1.body.position.x, this.s1.body.position.y, 200,200);
      //pop();
    //}
    
}  

function keyPressed()
{
     if(keyCode === 40)
     {
        
        p1.fly(); 
        Matter.Body.setVelocity(s1.body, {x:0 ,y:10});   
     }

     if(keyCode === 39)
     {
        p1.fly(); 
        Matter.Body.setVelocity(s1.body, {x:10 ,y:0});   
     } 
     
     if(keyCode === 38)
     {
        p1.fly(); 
        //Matter.Body.rotate(s1.body, Math.PI/2, this.s1.body.position.x);
        Matter.Body.setVelocity(s1.body, {x:0 ,y:-10});   
     } 
 
     if(keyCode === 37)
     {
        p1.fly(); 
        Matter.Body.setVelocity(s1.body, {x:-10 ,y:0});   
     }     
}