function setup() {
  createCanvas(800,600);
  textSize(150)
}

function draw() {
  background(255,255,200);
  
  var t = floor(millis()%1000);
  
  if (t<500){
    text("BLINKING!", 20,200);
  }
}