class proc
{
  constructor(x,y)
  {
    var options = {isStatic:false, density:1, friction:5};
    this.body = Bodies.rectangle(x,y,25,25,options);
    this.width = 20;
    this.height = 20;
    this.image = loadImage("villainBox2.png");
    World.add(world,this.body);
  }
  
  display()
  {
    push();
    imageMode(CENTER);
    //fill("black");
    image(this.image, this.body.position.x, this.body.position.y, 25, 25);
    pop();
  }
}