var girl;
var attack = []; //array
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
var jump;
var Jump = []; //array

function preload() {
    idle = loadImage('assets/Idle__000.png');
    Idle[0] = idle;
    idle = loadImage('assets/Idle__001.png');
    Idle[1] = idle;
    idle = loadImage('assets/Idle__002.png');
    Idle[2] = idle;
    idle = loadImage('assets/Idle__003.png');
    Idle[3] = idle;
    idle = loadImage('assets/Idle__004.png');
    Idle[4] = idle;
    idle = loadImage('assets/Idle__005.png');
    Idle[5] = idle;
    idle = loadImage('assets/Idle__006.png');
    Idle[6] = idle;
    idle = loadImage('assets/Idle__007.png');
    Idle[7] = idle;
    idle = loadImage('assets/Idle__008.png');
    Idle[8] = idle;
    idle = loadImage('assets/Idle__009.png');
    Idle[9] = idle;

    climb = loadImage('assets/Climb_000.png');
    climbUp[0] = climb;
    climb = loadImage('assets/Climb_001.png');
    climbUp[1] = climb;
    climb = loadImage('assets/Climb_002.png');
    climbUp[2] = climb;
    climb = loadImage('assets/Climb_003.png');
    climbUp[3] = climb;
    climb = loadImage('assets/Climb_004.png');
    climbUp[4] = climb;
    climb = loadImage('assets/Climb_005.png');
    climbUp[5] = climb;
    climb = loadImage('assets/Climb_006.png');
    climbUp[6] = climb;
    climb = loadImage('assets/Climb_007.png');
    climbUp[7] = climb;
    climb = loadImage('assets/Climb_008.png');
    climbUp[8] = climb;
    climb = loadImage('assets/Climb_009.png');
    climbUp[9] = climb;

    slide = loadImage('assets/Slide__000.png');
    slideDown[0] = slide;
    slide = loadImage('assets/Slide__001.png');
    slideDown[1] = slide;
    slide = loadImage('assets/Slide__002.png');
    slideDown[2] = slide;
    slide = loadImage('assets/Slide__003.png');
    slideDown[3] = slide;
    slide = loadImage('assets/Slide__004.png');
    slideDown[4] = slide;
    slide = loadImage('assets/Slide__005.png');
    slideDown[5] = slide;
    slide = loadImage('assets/Slide__006.png');
    slideDown[6] = slide;
    slide = loadImage('assets/Slide__007.png');
    slideDown[7] = slide;
    slide = loadImage('assets/Slide__008.png');
    slideDown[8] = slide;
    slide = loadImage('assets/Slide__009.png');
    slideDown[9] = slide;

    girl = loadImage('assets/Attack__000.png');
    attack[0] = girl;
    girl = loadImage('assets/Attack__001.png');
    attack[1] = girl;
    girl = loadImage('assets/Attack__002.png');
    attack[2] = girl;
    girl = loadImage('assets/Attack__003.png');
    attack[3] = girl;
    girl = loadImage('assets/Attack__004.png');
    attack[4] = girl;
    girl = loadImage('assets/Attack__005.png');
    attack[5] = girl;
    girl = loadImage('assets/Attack__006.png');
    attack[6] = girl;
    girl = loadImage('assets/Attack__007.png');
    attack[7] = girl;
    girl = loadImage('assets/Attack__008.png');
    attack[8] = girl;
    girl = loadImage('assets/Attack__009.png');
    attack[9] = girl;

    run = loadImage('assets/Run__000.png');
    Run[0] = run;
    run = loadImage('assets/Run__001.png');
    Run[1] = run;
    run = loadImage('assets/Run__002.png');
    Run[2] = run;
    run = loadImage('assets/Run__003.png');
    Run[3] = run;
    run = loadImage('assets/Run__004.png');
    Run[4] = run;
    run = loadImage('assets/Run__005.png');
    Run[5] = run;
    run = loadImage('assets/Run__006.png');
    Run[6] = run;
    run = loadImage('assets/Run__007.png');
    Run[7] = run;
    run = loadImage('assets/Run__008.png');
    Run[8] = run;
    run = loadImage('assets/Run__009.png');
    Run[9] = run;

    jump = loadImage('assets/Jump__000.png');
    Jump[0] = jump;
    jump = loadImage('assets/Jump__001.png');
    Jump[1] = jump;
    jump = loadImage('assets/Jump__002.png');
    Jump[2] = jump;
    jump = loadImage('assets/Jump__003.png');
    Jump[3] = jump;
    jump = loadImage('assets/Jump__004.png');
    Jump[4] = jump;
    jump = loadImage('assets/Jump__005.png');
    Jump[5] = jump;
    jump = loadImage('assets/Jump__006.png');
    Jump[6] = jump;
    jump = loadImage('assets/Jump__007.png');
    Jump[7] = jump;
    jump = loadImage('assets/Jump__008.png');
    Jump[8] = jump;
    jump = loadImage('assets/Jump__009.png');
    Jump[9] = jump;
}

function setup() {
    createCanvas(641, 542);
}

function draw() {
    background(245, 197, 66);
    frameRate(60);
    i += 1;
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

if (i>9)
i = 0;

if (keyIsDown(UP_ARROW)) { //up
    y -= 5;
    image(climbUp[i], x, y);
} 
else if (keyIsDown(32)) { //space
    image(attack[i], x, y);
} 
else if (keyIsDown(RIGHT_ARROW)) { //right
    x += 5;
    image(Run[i], x, y);
}
else if (keyIsDown(LEFT_ARROW)){ //left
    x-= 5;
    image(Run[i], x, y);
} 
else if (keyIsDown(DOWN_ARROW)) { //down
    y += 5;
    image(climbUp[i], x, y);
}
else if (keyIsDown(88)) {
    y -= 5;
    x+= 5; 
    image(Jump[i], x, y);
}
else {
    image(Idle[i], x, y);
} }