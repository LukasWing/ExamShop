/**
 * Sets up canvas and anchors it to the html-element with id="room". This only happens once.
 * variables initialised here without "var" are automatically global.
 */
setup = function(){
    var canvas = createCanvas(300, 200);
    canvas.parent("room");
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
 * Turns on the light by changing global variable
 */
var turnOnLights = function(){
    lightColor = color(0,255,0);
}
