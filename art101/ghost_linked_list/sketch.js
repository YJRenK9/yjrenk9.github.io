var hideElements = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var nodePositions = [200, 200, 250, 250, 250, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350];
var linkedListSize = 0;

var tempStopper = true;

var linePositions = [150, 200, 200, 250, 200, 250, 200, 250, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350];

let bluezGhost;

let theXPos = 200;
let theYPos = 320;

function setup() {
  createCanvas(400, 400);
  bluezGhostPatroller = new BlueGhost(200, 300, 60, 60);
}

function draw() {
  background(200, 250, 140);
  
  stroke(75, 0, 110);
  strokeWeight(4);
  
  if (!hideElements[0]) {
    //push();
    fill(200, 0, 200);
    
    textSize(48);
    textAlign(CENTER);
    text("NULL", 200, 200);
    //pop();
    
    //push();
    fill(0, 162, 232);
    rect(mouseX, mouseY, width / 8, height / 8);
    //pop();
  }
  
  // Each "row"(set) of nodes contains 4 nodes.
  // The user will insert one node at a time.
  insertRowOfNodes1();
  
  insertRowOfNodes2();
  
  insertRowOfNodes3();
  
  insertRowOfNodes4();
  
  if (!hideElements[15]) {
    // when Linked List is not "full"
    textSize(14);
    textAlign(CENTER);
    text("Insert a node to form a parade of blue ghosts", 200, 360);
  } else {
    // when Linked List has all its nodes inserted
    ghostFollower = new BlueGhost(theXPos, theYPos, 60, 60);
    ghostFollower.display();
    follow();
    
    textSize(14);
    textAlign(CENTER);
    fill(random(255), random(255), random(255));
    text("Great job! Now the blue ghosts are having a fun parade :D", 200, 360);
    
    bluezGhostPatroller.display();
    bluezGhostPatroller.move();
  }
  
  //console.log(mouseX + " " + mouseY);
  //console.log(linkedListSize);
}

function insertRowOfNodes1() {
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250)   {
      // LinkedList becomes no longer empty  
      hideElements[0] = true;
    
      // having a bool variable makes the size only gets added one at a time
      if (tempStopper) {
          linkedListSize++;
      }
      tempStopper = false;
  }
  
  if (hideElements[0]) {
    fill(0, 162, 232);
    rect(nodePositions[0], 200, width / 8, height / 8);
    //push();
    //fill(0, 162, 232);
    //textSize(18);
    //text("Head", nodePositions[0], 100);
    //pop();
    bluezGhost = new BlueGhost(nodePositions[0], 120, 80, 80);
    bluezGhost.display();
    
    // changing this to a while loop makes instant travel instead of transitioning travel
    if (nodePositions[0] > 100) { 
      nodePositions[0] -= 1;
    }    
  }
  
  if (nodePositions[0] <= 100) {
    if (!hideElements[1]) {
      //push();
      fill(70, 145, 120);
      rect(mouseX, mouseY, width / 8, height / 8);
      //pop();
    } 
    
    if (linkedListSize == 1) {
      if (mouseX > 150 && mouseX < 250 && 
          mouseY > 150 && mouseY < 250) 
      {
        hideElements[1] = true;
        
        tempStopper = true;
        if (tempStopper) {
          linkedListSize++;
        }
        tempStopper = false;
      
      }
      
    }
    if (hideElements[1]) {
        //push();
        fill(70, 145, 120);
        line(linePositions[0], 225, linePositions[1], 225);
        rect(nodePositions[1], 200, width / 8, height / 8);
        bluezGhost1 = new BlueGhost(nodePositions[1], 120, 80, 80);
        bluezGhost1.display();
        //pop();
      
        if (nodePositions[1] > 150) {
          nodePositions[0] -= 1;  
          nodePositions[1] -= 1;
          
          linePositions[0] -= 1;
          linePositions[1] -= 1;
          
        }
    }
  }
  
  if (nodePositions[1] <= 150) {
      if (!hideElements[2]) {
        fill(0, 125, 125);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 2) {
        if (mouseX > 250 && mouseX < 350 && 
            mouseY > 250 && mouseY < 350) 
        {
          hideElements[2] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[2]) {
        //push();
        fill(0, 125, 125);
        line(linePositions[2], 225, linePositions[3], 225);
        rect(nodePositions[2], 200, width / 8, height / 8)
        bluezGhost2 = new BlueGhost(nodePositions[2], 120, 80, 80);
        bluezGhost2.display();
        //pop();
      
        if (nodePositions[2] > 150) {
          nodePositions[0] -= 1;  
          nodePositions[1] -= 1;
          nodePositions[2] -= 1;
          
          linePositions[0] -= 1;
          linePositions[1] -= 1;
          linePositions[2] -= 1;
          linePositions[3] -= 1;
          
        }
        
    }
  }
  
  if (nodePositions[2] <= 150) {
      if (!hideElements[3]) {
        fill(0, 200, 250);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
    if (linkedListSize == 3) {
        if (mouseX > 250 && mouseX < 350 && 
            mouseY > 250 && mouseY < 350) 
        {
          hideElements[3] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
    }
    if (hideElements[3]) {
        //push();
        fill(0, 200, 250);
        line(linePositions[4], 225, linePositions[5], 225);
        rect(nodePositions[3], 200, width / 8, height / 8);
        bluezGhost3 = new BlueGhost(nodePositions[3], 120, 80, 80);
        bluezGhost3.display();
        //pop();
      
        if (nodePositions[3] > 150) {
          nodePositions[0] -= 1;  
          nodePositions[1] -= 1;
          nodePositions[2] -= 1;
          nodePositions[3] -= 1;
          
          linePositions[0] -= 1;
          linePositions[1] -= 1;
          linePositions[2] -= 1;
          linePositions[3] -= 1;
          linePositions[4] -= 1;
          linePositions[5] -= 1;
          
        }
        
    }
  }
}

function insertRowOfNodes2() {
  if (nodePositions[3] <= 150) {
      if (!hideElements[4]) {
        fill(0, 255, 255);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
    
    if (linkedListSize == 4) {
        if (mouseX > 250 && mouseX < 350 && 
            mouseY > 250 && mouseY < 350) 
        {
          hideElements[4] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
    
      if (hideElements[4]) {
        //push();
        fill(0, 255, 255);
        line(linePositions[6], 225, linePositions[7], 225);
        rect(nodePositions[4], 200, width / 8, height / 8);
        bluezGhost4 = new BlueGhost(nodePositions[4], 120, 80, 80);
        bluezGhost4.display();
        //pop();
      
    }
    
  }
  
  if (nodePositions[4] <= 250) {
    if (!hideElements[5] && linkedListSize >= 5 && linkedListSize < 6) {
        fill("#FFFF00");
        rect(mouseX, mouseY, width / 8, height / 8);
    }
    if (mouseX > 300 && mouseX < 400 && 
        mouseY > 200 && mouseY < 300 && 
        linkedListSize >= 5 && linkedListSize < 6) 
    {
          hideElements[5] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;  
    }
    if (hideElements[5]) {
        //push();
        fill("#FFFF00");
        line(linePositions[8], 225, linePositions[9], 225);
        rect(nodePositions[5], 200, width / 8, height / 8);
        bluezGhost5 = new BlueGhost(nodePositions[5], 120, 80, 80);
        bluezGhost5.display();
        //pop();
      
        if (nodePositions[5] > 250) {
          nodePositions[0] -= 1;  
          nodePositions[1] -= 1;
          nodePositions[2] -= 1;
          nodePositions[3] -= 1;
          nodePositions[4] -= 1;
          nodePositions[5] -= 1;
          
          linePositions[0] -= 1;
          linePositions[1] -= 1;
          linePositions[2] -= 1;
          linePositions[3] -= 1;
          linePositions[4] -= 1;
          linePositions[5] -= 1;
          linePositions[6] -= 1;
          linePositions[7] -= 1;
          linePositions[8] -= 1;
          linePositions[9] -= 1;
          
        }
        
    }
  }
  if (nodePositions[5] <= 250) {
      if (!hideElements[6]) {
        fill(155, 155, 255);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
    if (linkedListSize == 6) {
        if (mouseX > 300 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[6] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
    }
    if (hideElements[6]) {
        //push();
        fill(155, 155, 255);
        line(linePositions[10], 225, linePositions[11], 225);
        rect(nodePositions[6], 200, width / 8, height / 8);
        bluezGhost6 = new BlueGhost(nodePositions[6], 120, 80, 80);
        bluezGhost6.display();
        //pop();
      
        if (nodePositions[6] > 250) {
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
          
        }
        
    }
    
   }
  if (nodePositions[6] <= 250) {
      if (!hideElements[7]) {
        fill(250, 150, 0);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 7) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[7] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[7]) {
        //push();
        fill(250, 150, 0);
        line(linePositions[12], 225, linePositions[13], 225);
        rect(nodePositions[7], 200, width / 8, height / 8);
        bluezGhost7 = new BlueGhost(nodePositions[7], 120, 80, 80);
        bluezGhost7.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[7] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  
}

function insertRowOfNodes3() {
  if (nodePositions[7] <= 250) {
      if (!hideElements[8]) {
        fill("#FF007F");
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 8) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[8] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[8]) {
        //push();
        fill("#FF007F");
        line(linePositions[14], 225, linePositions[15], 225);
        rect(nodePositions[8], 200, width / 8, height / 8);
        bluezGhost8 = new BlueGhost(nodePositions[8], 120, 80, 80);
        bluezGhost8.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[8] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[8] <= 250) {
      if (!hideElements[9]) {
        fill(250, 250, 180);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 9) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[9] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[9]) {
        //push();
        fill(250, 250, 180);
        line(linePositions[16], 225, linePositions[17], 225);
        rect(nodePositions[9], 200, width / 8, height / 8);
        bluezGhost9 = new BlueGhost(nodePositions[9], 120, 80, 80);
        bluezGhost9.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[9] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[9] <= 250) {
      if (!hideElements[10]) {
        fill(120, 255, 200);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 10) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[10] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[10]) {
        //push();
        fill(120, 255, 200);
        line(linePositions[18], 225, linePositions[19], 225);
        rect(nodePositions[10], 200, width / 8, height / 8);
        bluezGhost10 = new BlueGhost(nodePositions[10], 120, 80, 80);
        bluezGhost10.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[10] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[10] <= 250) {
      if (!hideElements[11]) {
        fill(0, 0, 255);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 11) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[11] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[11]) {
        //push();
        fill(0, 0, 255);
        line(linePositions[20], 225, linePositions[21], 225);
        rect(nodePositions[11], 200, width / 8, height / 8);
        bluezGhost11 = new BlueGhost(nodePositions[11], 120, 80, 80);
        bluezGhost11.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[11] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
}

function insertRowOfNodes4() {
  if (nodePositions[11] <= 250) {
      if (!hideElements[12]) {
        fill(220, 200, 60);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 12) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[12] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[12]) {
        //push();
        fill(220, 200, 60);
        line(linePositions[22], 225, linePositions[23], 225);
        rect(nodePositions[12], 200, width / 8, height / 8);
        bluezGhost12 = new BlueGhost(nodePositions[12], 120, 80, 80);
        bluezGhost12.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[12] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[12] <= 250) {
      if (!hideElements[13]) {
        fill(250, 230, 70);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 13) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[13] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[13]) {
        //push();
        fill(250, 230, 70);
        line(linePositions[24], 225, linePositions[25], 225);
        rect(nodePositions[13], 200, width / 8, height / 8);
        bluezGhost13 = new BlueGhost(nodePositions[13], 120, 80, 80);
        bluezGhost13.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[13] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[13] <= 250) {
      if (!hideElements[14]) {
        fill(140, 110, 70);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 14) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[14] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[14]) {
        //push();
        fill(140, 110, 70);
        line(linePositions[26], 225, linePositions[27], 225);
        rect(nodePositions[14], 200, width / 8, height / 8);
        bluezGhost14 = new BlueGhost(nodePositions[14], 120, 80, 80);
        bluezGhost14.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[14] > 250) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 1;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 1;
          }
        }
      
      }
  }
  if (nodePositions[14] <= 250) {
      if (!hideElements[15]) {
        fill(250, 135, 250);
        rect(mouseX, mouseY, width / 8, height / 8);
      }
      if (linkedListSize == 15) {
        if (mouseX > 350 && mouseX < 400 && 
            mouseY > 200 && mouseY < 300) 
        {
          hideElements[15] = true;
        
          tempStopper = true;
          if (tempStopper) {
            linkedListSize++;
          }
          tempStopper = false;
      
        }
      }
      if (hideElements[15]) {
        //push();
        fill(250, 135, 250);
        line(linePositions[28], 225, linePositions[29], 225);
        rect(nodePositions[15], 200, width / 8, height / 8);
        bluezGhost15 = new BlueGhost(nodePositions[15], 120, 80, 80);
        bluezGhost15.display();
        //line(300, 225, 350, 225);
        //rect(350, 200, width / 8, height / 8);
        //pop();
      
        if (nodePositions[15] > 200) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 0.2;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 0.2;
          }
        }
        
        if (nodePositions[15] <= 200) {
          
          for (let n = 0; n < linkedListSize; n++) {
            nodePositions[n] -= 0.2;
          }
          
          for (let l = 0; l < (linkedListSize * 2) - 2; l++) {
            linePositions[l] -= 0.2;
          }
        }
      }
  }
}

// makes the blue ghost follow your cursor by "tailing" it
function follow() {
  if (theXPos < mouseX && theYPos < mouseY) {
      theXPos += 1;
      theYPos += 1;
    }
    if (theXPos > mouseX && theYPos > mouseY) {
      theXPos -= 1;
      theYPos -= 1;
    }
    if (theXPos < mouseX && theYPos > mouseY) {
      theXPos += 1;
      theYPos -= 1;
    }
    if (theXPos > mouseX && theYPos < mouseY) {
      theXPos -= 1;
      theYPos += 1;
    }
    if (theXPos > mouseX) {
      theXPos -= 1;
    }
    if (theXPos < mouseX) {
      theXPos += 1;
    }
    if (theYPos > mouseY) {
      theYPos -= 1;
    }
    if (theYPos < mouseY) {
      theYPos += 1;
    }
}

/* 
  Current Nodes:
  - MIS/IT
  - Computer games
  - Drawing and Painting
  - Digital Media(part 1)
  - Digital Media(part 2)
  - Khan Academy
  - C++
  - Blender
  - Graphic Design
  - SE/DMA > MIS/IT
  - met students who like both technical and artistic sides of software
  - hands-on software person
  - joined software-related clubs(part 1)
  - joined software-related clubs(part 2)
  - joined Studio Art Minor
  - Pursue in technical and artistic software courses(and other software-related courses)
  
  
*/