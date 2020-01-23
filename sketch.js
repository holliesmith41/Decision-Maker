// References found at p5js.org

// Add your variables here
var rectY = 0;
var r = 135;
var g = 206;
var b = 225;
let value = 0;


// initialize your program here
function setup() {
    createCanvas(500, 500);    
}




// Essentially a repeat command
function draw() {
    for (var i = 0; i < 50; i++) {
      fill(r, g, b);
      strokeWeight(0);
      rect(0, rectY, canvas.width, canvas.height/50); 
      rectY += canvas.height/50;
      r += 2;
      g += 3;
      b -= 4;
    };
    
    fill(value);
    var button = rect(210, 425, 55, 55, 20);
};

function mouseClicked() {
  if (mouseX > 210 && mouseX < 265 && mouseY > 425 && mouseY < 480) {if (value == 0) {
      value = 255;
  } else {
      value = 0;
    }
  }
};