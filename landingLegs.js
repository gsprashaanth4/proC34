class landingLegs
{
  constructor(x,y)
  {
    var options = {density:20 , restitution:0 , friction:0 , isStatic:false};
    this.body = Bodies.rectangle(x,y,140,10,options);
    this.image = loadImage("all1.png");
    World.add(world, this.body);
  }
   
  display()
  {
    
       push();
       imageMode(CENTER);
       image(this.image, this.body.position.x-20,this.body.position.y-20,200,60);
       pop();
  }
}