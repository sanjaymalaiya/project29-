const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var engine , world,polygon,polygonImage;
var constraintlog;


function preload(){
    polygonImage=loadImage("polygon.png");
}

function setup(){
   var Canvas= createCanvas(800,400);

   engine=Engine.create();
   world=Engine.world;

    

    box1=new box(500,360,20,20);
    box2=new box(520,360,20,20);
    box3=new box(540,360,20,20);
    box4=new box(560,360,20,20);
    box5=new box(580,360,20,20);
    box6=new box(600,360,20,20);
    box7=new box(510,330,20,20);
    box8=new box(530,330,20,20);
    box9=new box(550,330,20,20);
    box10=new box(570,330,20,20);
    
    
    box11=new box(590,330,20,20);
    box12=new box(520,310,20,20);
    box13=new box(540,330,20,20);
    box14=new box(560,330,20,20);
    box15=new box(580,330,20,20);
    box16=new box(530,280,20,20);
    box17=new box(550,280,20,20);
    box18=new box(570,280,20,20);
    box19=new box(540,250,20,20);
    box20=new box(560,280,20,20);


    box21=new box(500,360,20,20);
    box22=new box(500,360,20,20);
    box23=new box(500,360,20,20);
    box24=new box(500,360,20,20);
    box25=new box(500,360,20,20);
    box26=new box(500,360,20,20);
    box27=new box(500,360,20,20);
    box28=new box(500,360,20,20);
    box29=new box(500,360,20,20);
    box30=new box(500,360,20,20);

    polygon=new polygon(0,0,50);

    spring=new projectile(polygon.body,{x:200,y:200});

    grouund=new plateform(400,390,800,20);

    groundover=new plateform(550,160,200,20);
    
}

function draw(){
background("black");

dubg:true;

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

box26.display();
box27.display();
box28.display();
box29.display();
box30.display();



polyon.display();
spring.display();
ground.display();
groundover.display();

drawSprite();
}

function mouseDragged(){
Matter.Body.setPosition(polyon,{x:mousex,y:mousey});
}

function Released(){
    spring.release();

}


