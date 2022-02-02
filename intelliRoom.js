/// Declaring global variables
//var naturalLighting;
//var lightColor;
//var backgound;

/**
 * Sets up canvas and anchors it to the html-element with id="room". This only happens once.
 */
setup = function(){
    var canvas = createCanvas(300, 200);
    canvas.parent("room");
    //setting global variables
    naturalLighting = color(70, 70, 70);    
    lightColor = naturalLighting;
    backgoundColor = naturalLighting;
}
/**
 * Draw function that is called by p5js 50 times every second.
 */
draw = function(){
    background(backgoundColor);
    drawFloorPlan();
    drawLighting();
}
var set3 = function(){
    a =3 ;
}
var p3 = function(){
    console.log(a);
}

var drawFloorPlan = function() {
    push();
    strokeWeight(2);
    fill(naturalLighting);
    rect(25, 25, 250, 150);
    pop();
}

var drawLighting = function() {
    push();
    fill(lightColor);
    noStroke();
    ellipse(100,100, 130, 130);
    pop();
}

/**
 * Function that turns on the light by setting global variables
 */
var turnOnLights = function(){
    lightColor = color(255,255,0);
}

/**
 * Function that turns off lighting by setting natural colors. 
 */
var turnOfLights = function(){
    lightColor = naturalLighting;
}



