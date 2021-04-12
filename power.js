class power 
{
   constructor(bodyA,pointB)
   {
     var options = { bodyA:bodyA, pointB:pointB, stiffness:0.5, length:200 }
     this.pointB = pointB ;
     this.cable = Constraint.create(options);
     World.add(world, this.cable);
   }


      
  display()
  {
    var pointA = this.cable.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(2);
    stroke("black");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();
  }

  fly()
  {
    this.cable.bodyA = null;
  }

  fix()
  {
    this.cable.bodyA = body;
  }
}

