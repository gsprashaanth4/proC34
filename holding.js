class holding 
{
    constructor(bodyA, bodyB)
    {
        var options = {bodyA:bodyA, bodyB:bodyB, stiffness:0.8, length:10}
        this.hold = Constraint.create(options);
        World.add(world, this.hold);
    }

    display()
    {
        var pointA = this.hold.bodyA.position;
        var pointB = this.hold.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
