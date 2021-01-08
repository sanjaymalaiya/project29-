class Polygon{
    constructor(x,y,radius){
    var option={
        restitution:0.8,
        friction:1.0,
        density:1.0
    }

    this.body=Bodies.circle(x,y,radius,options);
    this.r=r;
    polyongImage=loadImage("polygon.png");
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("yellow");
        ImageMode(CENTER);
        image(polygon_Image,polygon.position.x,polygon.position.y,40,40);
        ellipse(x,y,this.radius);

    }
}