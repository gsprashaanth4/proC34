class bg 
{
  constructor(x,y)
  {
    var options = {isStatic:true};
    this.body = Bodies.rectangle(x,y,60,60,options);
    this.width = 60;
    this.height = 60;
    //this.image = loadImage("backg.jpg");
    World.add(world, this.body);
  }
  
  display()
  {
    push();
    rectMode(CENTER) ;
    //fill("black");
    rect(this.body.position.x,this.body.position.y,1200,550);
    pop();
  }
}