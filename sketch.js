const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 300,50,50);
    box2 = new Box(900, 300,50,50);
    pig1 = new Pig(800, 300);
    log1 = new Log(800, 250, 300, PI/2)
    box3 = new Box(700, 200,50,50);
    box4 = new Box(900, 200,50,50);
    pig2 = new Pig(800, 200);
    log2 = new Log(800, 150, 300, PI/2)
    box5 = new Box(800, 100,50,50);
    log3 = new Log(875, 75, 150, -PI/5)
    log4 = new Log(725, 75, 150, PI/5)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    pig1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    log3.display();
    box5.display();
    log4.display();


}