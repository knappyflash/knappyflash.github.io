
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

  andGate1.Draw(100, 50, true);

  strokeWeight(8);
  stroke(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text('AND Gate', 25, 200);
}

window.draw = () => {
}

window.mousePressed = () => {
  console.log("Mouse Pressed");
}

window.mouseReleased = () => {
  console.log("Mouse Relased");
  background(bg[0], bg[1], bg[2], bg[3]);
  if (andGate1.isOn){
    andGate1.Draw(100, 50, false);
  } else{
    andGate1.isOn = true;
    andGate1.Draw(100, 50, true);
  }
}