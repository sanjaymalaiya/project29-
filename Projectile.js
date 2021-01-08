class Projectile{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }

    release(){
        this.body.bodyA=nul;
    }
    display(){
        if(this.body.bodyA){
            var pointA=this.body.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(1);
            stroke("blue");
            Line(point.x,point.y,point.x,point.y);
        }
    }
}