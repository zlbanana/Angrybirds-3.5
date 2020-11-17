class SlingShot {
    constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          length:10,
          stiffness:0.04
      } 
      this.Sling= Constraint.create(options)
      World.add (world,this.Sling);
      this.bodyA = bodyA;
      this.pointB = pointB;
    }
    display()
    {
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position
            var pointB = this.pointB
            strokeWeight (4)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        
    }
    fly(){
        this.Sling.bodyA=null;
    }
}
