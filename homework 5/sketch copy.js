var attack;
var Attack = []; //array
var i = 0;
var x = 0;
var climb;
var climbUp = []; //array
var slide;
var slideDown = []; //array
var idle;
var Idle = []; //array
var y = 0;
var run;
var Run = []; //array
var slide;
var Slide = []; //array
var pics = [];
var hit = false;
var rock;
var rockX = 600;
var rockY = 500;
var rock2;
var rockX2 = 300;
var rockY2 = 150;


function addImages(data) {
    for (var i = 0; i < data.length; i++) {
        idle = loadImage('assets/' + data[i]);
        console.log('assets/' + data[i])
        Idle[i] = idle;
    }
}
function addClimbImages(data) {
    for (var i = 0; i < data.length; i++) {
        climb = loadImage('assets/' + data[i]);
        console.log('assets/' + data[i])
        climbUp[i] = climb;
    }
}
function addSlideImages(data) {
    for (var i = 0; i < data.length; i++) {
        slide = loadImage('assets/' + data[i]);
        console.log('assets/' + data[i])
        Slide[i] = slide;
    }
}
function addAttackImages(data) {
    for (var i = 0; i < data.length; i++) {
        attack = loadImage('assets/' + data[i]);
        console.log('assets/' + data[i])
        Attack[i] = attack;
    }
}
function addRunImages(data) {
    for (var i = 0; i < data.length; i++) {
        run = loadImage('assets/' + data[i]);
        console.log('assets/' + data[i])
        Run[i] = run;
    }
}

function preload() {
    loadStrings('assets/idle.txt', addImages)
    loadStrings('assets/idle.txt', addClimbImages)
    loadStrings('assets/idle.txt', addSlideImages)
    loadStrings('assets/idle.txt', addAttackImages)
    loadStrings('assets/idle.txt', addRunImages)

    rock = loadImage("assets/rock1.png");
    rock2 = loadImage("assets/rock2.png");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(245, 197, 66);
    image(rock, rockX, rockY);
    image(rock2, rockX2, rockY2);
    frameRate(60);
    i += 1;
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
}

if (i>9)
i = 0;

var hit = collideRectRect(x, y, Run[i].width, Run[i].height, rockX, rockY, rock.height, rock.width);
print('hit' + hit);
var hit = collideRectRect(x, y, Run[i].width, Run[i].height, rockX2, rockY2, rock2.height, rock2.width);


if (keyIsDown(UP_ARROW)) { //up
    image(climbUp[i], x, y);
    if (hit == true) {
        y += 5;
    } else {
        y -= 5;
    }
} 
else if (keyIsDown(32)) { //space
    image(attack[i], x, y);
} 
else if (keyIsDown(RIGHT_ARROW)) { //right
    image(Run[i], x, y);
    if (hit == true) {
        x -= 5;
    } else {
        x += 5;
    }
}
else if (keyIsDown(LEFT_ARROW)){ //left
    image(Run[i], x, y);
    direction = "left";
        if (hit == true) {
            x += 5;
        } else {
            x -= 5;
        }
} 
else if (keyIsDown(DOWN_ARROW)) { //down
    image(climbUp[i], x, y);
    if (hit == true) {
        y -= 5;
    } else {
        y += 5;
    }
}
else if (keyIsDown(88)) {
    y -= 5;
    x+= 3; 
    image(Jump[i], x, y);
}
else if (keyIsDown(65)) {
    x -= 5;
    image(Slide[i], x, y);
}
else if (keyIsDown(68)) {
    x += 5;
    image(Slide[i], x, y);
}
else {
    image(Idle[i], x, y);
    print ('i'+ Idle[i]);
} }