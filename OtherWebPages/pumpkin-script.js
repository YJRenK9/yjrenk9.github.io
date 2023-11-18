let w = 1280;
let h = 720;

// used for yellow color
let red = 0;
let green = 0;

// used for the tongue's visibility
let opacity = 0;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(120, 90, 120);
  noStroke();
  
  fill(150, 75, 0);
  // stem
  quad(
    w / 2.0, h / 3.6, 
    w / 1.9, h / 5.6, 
    w / 2.15, h / 5.6, 
    w / 2.15, h / 3.6
  );
  // using w and h to scale the shape more efficiently
  
  // vertex(windowWidth / 1.8, windowHeight / 3.6);

  fill('orange');
  // body
  ellipse(w / 2, h / 2, 400, 360);
  ellipse(w / 2.125, h / 2, 400, 360);

  // skin texture
  //push();
  noFill();
  stroke('brown');
  // left curves
  curve(1000, 0, w / 2.55, h / 3.5, w / 2.55, h / 1.4, 1000, 600);
  curve(1000, 0, w / 2.25, h / 3.9, w / 2.25, h / 1.345, 1000, 600);
  curve(1000, 0, w / 2.05, h / 4, w / 2.05, h / 1.3333, 1000, 600);
  // right curves
  curve(200, 0, w / 1.725, h / 3.5, w / 1.725, h / 1.4, 300, 600);
  curve(200, 0, w / 1.875, h / 3.9, w / 1.875, h / 1.345, 300, 600);
  curve(200, 0, w / 2.05, h / 4, w / 2.05, h / 1.3333, 300, 600);
  //pop();
  
  // if/else statement is used to make the face color yellow when the mouse cursor is closer to the pumpkin
  if (mouseX > w / 2) {
    red = map(mouseX, 0, w, 255, 0);
    green = map(mouseX, 0, w, 255, 0);
    opacity = map(mouseX, 0, w, 255, 0);
  } else {
    red = map(mouseX, 0, w, 0, 255);
    green = map(mouseX, 0, w, 0, 255);
    opacity = map(mouseX, 0, w, 0, 255);
  }
  // console.log(red + " " + green);
  // multiply by 2.5 because the color value was weak
  fill(red * 2.5, green * 2.5, 0);
  noStroke();
  // to move triangle, +x-value must be same and +y-value must be same, but both do not have to be the same

  // left eye
  triangle(
            (w / (64 / 3)) + 425, 
            (h / 6) + 200, 
            (w / (128 / 11)) + 425, 
            (h / 24) + 200, 
            (w / 8) + 425, 
            (h / 6) + 200
          );
  // right eye
  triangle(
    (w / (64 / 3)) + 600, 
    (h / 6) + 200, 
    (w / (128 / 11)) + 600, 
    (h / 24) + 200, 
    (w / 8) + 600, 
    (h / 6) + 200
  );
  // nose 
  triangle(
    (w / (16 / 1)) + 512.5, 
    (h / 6) + 260, 
    (w / (128 / 11)) + 512.5, 
    (h / 12) + 260, 
    (w / (64 / 7)) + 512.5, 
    (h / 6) + 260
  );
  // mouth
  arc((w / (128 / 11)) + 512.5, (h / 12) + 320, 300, 250, 0, PI);
  
  fill('orange');
  // smile
  arc((w / (128 / 11)) + 512.5, (h / 12) + 320, 300, 60, 0, PI);
  
  // tongue (need fill and stroke for it to be visible)

  // opacity is being multiplied by 2.5 to increase its strength
  fill(255, 0, 0, opacity * 2.5);
  stroke(255, 0, 0, opacity * 2.5);
  // curve(900, 900, (w / (128 / 11)) + 605, (h / 12) + 415, (w / (128 / 11)) + 475, (h / 12) + 440, 700, 800);
  //curve(900, 240, (w / (128 / 11)) + 605, (h / 12) + 417, (w / (128 / 11)) + 475, (h / 12) + 440, 700, 480);
  //ellipse((w / (128 / 11)) + 550, (h / 12) + 415, 100, 40);
  //circle((w / (128 / 11)) + 599, (h / 12) + 415, 10);
  //circle((w / (128 / 11)) + 480, (h / 12) + 435, 10);
  
  beginShape();
  // fill('cyan');
  // stroke('cyan');
  curveVertex((w / (128 / 11)) + 605, (h / 12) + 415);
  curveVertex((w / (128 / 11)) + 605, (h / 12) + 415);
  curveVertex((w / (128 / 11)) + 580, (h / 12) + 380);
  curveVertex((w / (128 / 11)) + 530, (h / 12) + 375);
  curveVertex((w / (128 / 11)) + 488, (h / 12) + 400);
  curveVertex((w / (128 / 11)) + 475, (h / 12) + 440);
  curveVertex((w / (128 / 11)) + 535, (h / 12) + 442.5);
  curveVertex((w / (128 / 11)) + 575, (h / 12) + 433);
  curveVertex((w / (128 / 11)) + 605, (h / 12) + 418.5);
  curveVertex((w / (128 / 11)) + 605, (h / 12) + 418.5);
  endShape();
  //arc((w / (128 / 11)) + 512.5, (h / 12) + 405, 120, 50, PI, TAU);

  // eyes
  ellipse((w / (128 / 11)) + 440, h / 2.55, 20, 40);
  ellipse((w / (128 / 11)) + 615, h / 2.55, 20, 40);
  
  fill('orange');
  noStroke();
  // upper teeth
  rect((w / (128 / 11)) + 410, (h / 12) + 340, 60, 40);
  rect((w / (128 / 11)) + 560, (h / 12) + 340, 60, 40);
  // lower tooth
  rect((w / (128 / 11)) + 485, (h / 12) + 405, 60, 40);

  // text only appears when the mouse cursor is closer to the pumpkin
  fill(255, 255, 255, opacity * 2.5);
  textSize(48);
  textAlign(CENTER);
  text('Happy Halloween!', w / 1.25, h / 4.5);
  text('lol', w / 1.25, h / 3.5);
  
  // beginShape();
  // vertex((w / (64 / 3)) + 410, (h / 6) + 275);
  // bezierVertex(500, 550, 750, 550, (w / 8) + 615, (h / 6) + 275);
  // bezierVertex(660, 420, 640, 420, (w / (64 / 3)) + 410, (h / 6) + 275);
  // endShape();

  
  // line((w / (64 / 3)) + 425, (h / 6) + 200, (w / 8) + 245, (h / 6) + 200);
  // line((w / (64 / 3)) + 705, (h / 6) + 200, (w / 8) + 680, (h / 6) + 200);
}