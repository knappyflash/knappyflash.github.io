import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";
import AndGate  from "./AndGate.js";

export const AllGatesSketch = (p) => {
  console.log("Hi :)");
  let bg = [150, 150, 200, 255];

  let lever = new Lever();
  let bulb = new Bulb();
  let notGate = new NotGate();
  let andGate = new AndGate();


  window.setup = () => {
    console.log("Hi :)");
    let currentTime = new Date();
    console.log(currentTime + ": Starting Setup");
    const parent = document.getElementById("allGatesDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = createCanvas(w-20, h-20);
    canvas.parent("allGatesDiv");
    background(bg[0], bg[1], bg[2], bg[3]);

    lever.Update(100,100);
    // notGate.Update(175,130,lever);
    // bulb.Update(400,90,notGate);
  }

  window.draw = () => {
  }
}