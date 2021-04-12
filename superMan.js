class superMan
{
  constructor(x,y)
  {
    var options = {density:50 , restitution:0 , friction:0 , isStatic:false};

    this.width = 140;
    this.height = 30;

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);

    this.image1 = loadImage("airplane1.png");
    this.image2 = loadImage("airplane2.png");
    World.add(world, this.body);
   


  }
   
  display()
  {
    

    //push();
    //rectMode(CENTER);
    //rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
    //pop();     
    
    
    if(this.body.position.y < 420)
    {
       push();
       imageMode(CENTER);
       image(this.image2, this.body.position.x-15,this.body.position.y-6,180,65);
       pop();

       this.height = 18;
    }else
    {
       push();
       imageMode(CENTER);
       image(this.image1, this.body.position.x-15,this.body.position.y-12,180,65);
       pop(); 

       this.height = 30;
    }

  }
}