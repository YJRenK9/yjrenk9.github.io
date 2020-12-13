// also known as Hello All-Seeing Eye!
function setup() {
  createCanvas(700, 700);
}

function draw() {
	frameRate(20);
  background(60, 120, 240);
	
	//fill(250, 123, 32);
	//triangle(pmouseX, pmouseY, pmouseX, pmouseY, pmouseX, pmouseY);
	
	
	
	
	
	if (mouseIsPressed) {
			
			fill(random(234), random(234), random(3));
			
			ellipse(random(600), random(600), random(80), random(240));
			
			fill(random(25), random(150), random(250));  
			ellipse(random(400) + mouseX, random(400) + mouseY, random(240), random(80));
	
	}
  
  if (keyIsPressed) {
  	    
  }
	var centre = 400;
  fill(25, 25, 25);
  line(centre, centre - 220, centre, centre - 40);
  line(centre - 200, centre - 200, centre - 105, centre - 20);
  line(centre + 200, centre - 200, centre + 105, centre - 20);
  strokeWeight(4);
  
	fill(250, 250, 250); // eye
  ellipse(centre, centre, 420, 280);
	
  fill(25, 25, 25); // pupil
	ellipse(centre, centre, 80, 240);
 
	
	fill(120, 255, 240) // cyan
	text("Hello World!", 250, 100);
	textSize(36);
}