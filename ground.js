class ground
{
  constructor(x,y)
  {
    var options = {isStatic:true, density:10};
    this.body = Bodies.rectangle(x, y, 2000, 70, options);
    this.width = 2000;
    this.height = 70;
    World.add(world,this.body);
  }
  
  display()
  {
    push();
    fill("black");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 2000, 70);
    pop();
  }
}