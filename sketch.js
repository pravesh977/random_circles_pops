var cord = {
  x:0,
  y:0
};
function setup() {
  createCanvas(640,480);
 
}

function draw() {

  background(21,213,142);
  //cord.x=random(0,600);
  //cord.y=random(0,480);
  ellipse((random(0,600)),(random(0,400)),50,50);
}