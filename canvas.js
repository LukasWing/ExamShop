/**
 * Sets up canvas and anchors it to the html-element with id="welcome". This only happens once.
 * variables initialised here without "var" are automatically global.
 */
setup = function(){
    var canvas = createCanvas(300, 200);
    canvas.parent("welcome");
    naturalLighting = color(70, 70, 70);
    backgoundColor = naturalLighting;
}
/**
 * Draw function that is called by p5js 50 times every second.
 */
draw = function(){
    background(backgoundColor);
}

