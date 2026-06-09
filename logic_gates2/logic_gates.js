import Bulb from "./Bulb.js";
import AndGate from "./AndGate.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";

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
let notGate1 = new NotGate();


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
  notGate1.Update(175,130,leverA);
  console.log("notGate1 Output: " + notGate1.outputValue);
  bulb1.Update(400,90,notGate1);
}