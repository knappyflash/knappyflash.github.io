
import AndGate from "./AndGate.js";

const pageTitle = "Logic Gates";
window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  // changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

let bg = [150, 150, 200, 255];
let myState = 1;

let andGate1 = new AndGate(100, 50, false);

window.setup = () => {
  let currentTime = new Date();
  console.log(currentTime + ": Starting Setup");
  const parent = document.getElementById("logicgateDiv");
  let w = parent.clientWidth;
  let h = parent.clientHeight;
  let canvas = createCanvas(w-20, h-20);
  canvas.parent("logicgateDiv");
  background(bg[0], bg[1], bg[2], bg[3]);

  // DrawAndGate(100, 50, false);
  andGate1.Draw();

  strokeWeight(8);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text('AND Gate', 25, 200);
}

window.draw = () => {
}

function mousePressed() {
  console.log("Mouse Pressed");
}

function mouseReleased() {
  console.log("Mouse Relased");
  console.log("myState: " + myState);
  switch (myState) {
    case 0:
      DrawAndGate(68, 20, false);
      DrawAndGate(30, 100, false);
      DrawAndGate(100, 100, false);
      myState=1;
      break;
    case 1:
      DrawAndGate(68, 20, false);
      DrawAndGate(30, 100, false);
      DrawAndGate(100, 100, true);
      myState=2;
      break;
    case 2:
      DrawAndGate(68, 20, false);
      DrawAndGate(30, 100, true);
      DrawAndGate(100, 100, false);
      myState=3;
      break;
    case 3:
      DrawAndGate(68, 20, true);
      DrawAndGate(30, 100, true);
      DrawAndGate(100, 100, true);
      myState=0;
      break;
    default:
      console.log('Unknown animal.');
  }
}

function DrawButton(x, y, isOn){
  strokeWeight(4);
  stroke(0, 0, 0);
  if (isOn){
    fill(255, 0, 0);
    rect(x, y, 60, 60);
    fill(255, 255, 255);
    textSize(30);
    text('1', x+22, y+40);
  } else {
    fill(200,200,200);
    rect(x, y, 60, 60);
    fill(255, 255, 255);
    textSize(30);
    text('0', x+22, y+40);
  }
}

function DrawAndGate(x, y, isOn){
  strokeWeight(10);
  stroke(0, 0, 0);
  ellipse(x, y, 80, 80);
  rect(x-40, y, 80, 40);
  noStroke();
  ellipse(x, y, 80, 80);
  rect(x-40, y, 80, 40);
  fill(255, 255, 255);
  textSize(30);
  strokeWeight(8);
  stroke(0, 0, 0);
  text('0', x-8, y+10);
}