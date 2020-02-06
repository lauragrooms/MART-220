var x = 113;
var diameter = 75;
var speed = 3;
let theCircle,theCircle2;
let theSquare;

function setup() 
{
  createCanvas(400, 400);
  theCircle = new myCircle(100,110,145,57, 170, 212);
  theCircle2 = new myCircle(150,250,75,23,149,10);
  theCircle3 = new myCircle(240,120,55,236,49,130);
  theSquare = new mySquare(224,250,90,235, 160, 47);
  theSquare2 = new mySquare(40,200,80,120,45,150);
}

function draw() 
{
  background(194, 118, 112);
  theCircle.display();
  theCircle2.display();
  theCircle3.display();
  theSquare.display();
  theSquare2.display();
  textSize(32);
  fill(0, 102, 153);
  text('post it', 150, 30);
  textSize(20);
  fill(255, 255, 255);
  text('laura e grooms', 250, 390);
}

class myCircle 
{

  constructor(x,y,diameter,red,green,blue)
  {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  
  display()
  {
     fill(this.red,this.green,this.blue);
     circle(this.x,this.y, this.diameter); 
  }

}

class mySquare 
{

  constructor(x,y,side,red,green,blue)
  {
    this.x = x;
    this.y = y;
    this.side = side;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  
  display()
  {
     fill(this.red,this.green,this.blue);
     square(this.x,this.y, this.side); 
  }
  
}