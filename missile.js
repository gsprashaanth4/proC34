class missile
{
  constructor(x,y)
  {
    var options = {isStatic:false, density:10, restitution:1};
    this.width = 100;
    this.height = 50;

    this.height1 = 20
   
    this.body1 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body2 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body3 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body4 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body5 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body6 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body7 = Bodies.rectangle(x, y, this.width, this.height, options);
    this.body8 = Bodies.rectangle(x, y, this.width, this.height1, options);            

    this.image1 = loadImage("build1.png");
    this.image2 = loadImage("build2.png");
    this.image3 = loadImage("build3.png");
    this.image4 = loadImage("build4.png");
    this.image5 = loadImage("build5.png");     
   
    World.add(world,this.body1);
    World.add(world,this.body2);
    World.add(world,this.body3);
    World.add(world,this.body4);
    World.add(world,this.body5);
    World.add(world,this.body6);
    World.add(world,this.body7);
    World.add(world,this.body8);
    
  }
  
  display()
  {
    
 /*   
    push();
    rectMode(CENTER);
    rect(this.body1.position.x, this.body1.position.y, this.width, this.height);
    pop();

    push();
    rectMode(CENTER);
    rect(this.body2.position.x, this.body2.position.y, this.width, this.height); 
    pop();

    push();
    rectMode(CENTER);
    rect(this.body3.position.x, this.body3.position.y, this.width, this.height);
    pop();

    push();
    rectMode(CENTER);
    rect(this.body4.position.x, this.body4.position.y, this.width, this.height);
    pop();

    push();
    rectMode(CENTER);
    rect(this.body5.position.x, this.body5.position.y, this.width, this.height); 
    pop();

    push();
    rectMode(CENTER);
    rect(this.body6.position.x, this.body6.position.y, this.width, this.height);
    pop();
    
    push();
    rectMode(CENTER);
    rect(this.body7.position.x, this.body7.position.y, this.width, this.height); 
    pop();

    push();
    rectMode(CENTER);
    rect(this.body8.position.x, this.body8.position.y, this.width, this.height1);
    pop();    
*/    
   
    push();
    imageMode(CENTER);
    image(this.image5, this.body8.position.x, this.body8.position.y+0.5, 100, 20);
    pop(); 
    
    push();
    imageMode(CENTER);
    image(this.image1, this.body1.position.x, this.body1.position.y, 100, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image2, this.body2.position.x, this.body2.position.y, 125, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image3, this.body3.position.x, this.body3.position.y, 125, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image4, this.body4.position.x, this.body4.position.y, 100, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image4, this.body5.position.x, this.body5.position.y, 100, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image4, this.body6.position.x, this.body6.position.y, 100, 51);
    pop();

    push();
    imageMode(CENTER);
    image(this.image4, this.body7.position.x, this.body7.position.y, 100, 51);
    pop();




  }
}