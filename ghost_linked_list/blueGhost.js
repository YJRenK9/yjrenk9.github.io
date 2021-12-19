let distanceTracker = true;
let distanceTracker1 = true;

class BlueGhost {
  constructor(xpos, ypos, wsize, hsize) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.wsize = wsize;
    this.hsize = hsize;
  }
  
  display() {
    fill("#E1FFFF");
    ellipse(this.xpos, this.ypos, this.wsize, this.hsize);
    fill(0, 255, 255);
    ellipse(this.xpos - 20, this.ypos - 10, this.wsize / 8, this.hsize / 8);
    ellipse(this.xpos + 10, this.ypos - 10, this.wsize / 8, this.hsize / 8);
    rect(this.xpos - 10, this.ypos + 20, this.wsize / 4, this.hsize / 6);
  }
  
  move() {
    //var distanceTracker = 0;
    if (this.xpos > 40 && distanceTracker) {
        this.xpos = this.xpos - 1;
        
    } else {
      distanceTracker = false;
      if (this.xpos == 40) {
         distanceTracker1 = true; 
      }
      
      if (this.xpos >= 40 && this.xpos <= 360 && distanceTracker1) {
        
        this.xpos = this.xpos + 1;
            
      } else {
        distanceTracker1 = false;
        this.xpos = this.xpos - 1;
      }
      
    }
    
  }
}