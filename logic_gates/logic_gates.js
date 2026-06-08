import Bulb from "./Bulb.js";
import AndGate from "./AndGate.js";
import Lever from "./Lever.js";

const pageTitle = "Logic Gates";
window.addEventListener("load", function () {
  console.log(pageTitle + " Page is loaded");
  changeTitle();
});
function changeTitle() {
  const headerFrame = parent.frames["header"];
  const title = headerFrame.document.getElementById("topTitle");
  title.textContent = pageTitle;
}

let bg = [150, 150, 200, 255];

let leverA = new Lever();
let leverB = new Lever();
let andGate1 = new AndGate();
let bulb1 = new Bulb();


window.setup = () => {
  let currentTime = new Date();
  console.log(currentTime + ": Starting Setup");
  const parent = document.getElementById("logicgateDiv");
  let w = parent.clientWidth;
  let h = parent.clientHeight;
  let canvas = createCanvas(w-20, h-20);
  canvas.parent("logicgateDiv");
  background(bg[0], bg[1], bg[2], bg[3]);
  UpdateLogicGates();
}

window.draw = () => {
}

window.mousePressed = () => {
  console.log("Mouse Pressed");
}

window.mouseReleased = () => {
  console.log("Mouse Relased");
  UpdateLogicGates();
}

function UpdateLogicGates(){
  background(bg[0], bg[1], bg[2], bg[3]);
  leverA.Update(60,90);
  leverB.Update(60,130);
  andGate1.Update(200,90,leverA,leverB)
  bulb1.Update(400,90,andGate1);
}