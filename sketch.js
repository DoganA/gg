// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY


var radius = 75.0; //radius der Uhrkreises
var numPoints = 60; //Anzahl der Minuten bzw.Sekunden

//var clock = new Clock(303, 450, 75);
let t1 = 0;
let t2 = 0;

let speedX = 0;
let speedY = 0;

var baer;

function setup() {
    createCanvas(1200, 700);
    baer = new Bear();
    
    //Code zum aufrufen von Clock.js:
    //createCanvas(200, 200);
    //clocks = new Clock(303, 450, 450);
}

function draw() {
    //code zum aufrufen von baer.js
    background(255);
    t1 = second() / 2;
    var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    t2 = second();

    speedX = sin(s / 2) * 2;
    speedY = cos(t2) * 30;

    //line(200, 0, x + speedX, y + speedY);
    //ellipse(x + speedX, y + speedY, 100);

    baer.update(sin(t1) * 100, cos(t2) * 30);
    baer.show();
    //Code zum aufrufen von Clock.js:
    //clock.draw();
}
