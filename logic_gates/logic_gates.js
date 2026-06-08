import Bulb from "./Bulb.js";
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
let bulb1 = new Bulb();
let andGate1 = new AndGate();


window.setup = () => {
  let currentTime = new Date();
  console.log(currentTime + ": Starting Setup");
  const parent = document.getElementById("logicgateDiv");
  let w = parent.clientWidth;
  let h = parent.clientHeight;
  let canvas = createCanvas(w-20, h-20);
  canvas.parent("logicgateDiv");
  background(bg[0], bg[1], bg[2], bg[3]);

  stroke(0, 0, 0);
  strokeWeight(8);
  line(315,129,400,160);
  andGate1.Update(200,90,0,0);
  bulb1.Update(400,90,andGate1.output);

}

window.draw = () => {
}

window.mousePressed = () => {
  console.log("Mouse Pressed");
}

let tempCounter = 0;
window.mouseReleased = () => {
  console.log("Mouse Relased");
  background(bg[0], bg[1], bg[2], bg[3]);
  
  switch(tempCounter){
    case 0:
      andGate1.Update(200,90,0,0)
      break;
    case 1:
      andGate1.Update(200,90,0,1)
      break;
    case 2:
      andGate1.Update(200,90,1,0)
      break;
    case 3:
      andGate1.Update(200,90,1,1)
      break;
    default:
      console.log("Unknown switch");
  }

  line(315,129,400,160);
  bulb1.Update(400,90,andGate1.output);

  tempCounter++;
  if (tempCounter>3){
    tempCounter=0;
  }
}