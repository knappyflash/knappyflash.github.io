import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";
import AndGate  from "./AndGate.js";

export const ComponetsSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever = new Lever(p);
  let bulb = new Bulb(p);
  let notGate = new NotGate(p);
  let andGate = new AndGate(p);


  p.setup = () => {
    const parent = document.getElementById("allGatesDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("allGatesDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    UpdateLogicGates();
  }

  p.draw = () => {
  }

  p.mousePressed = () => {
  }

  p.mouseReleased = () => {
    UpdateLogicGates();
  }

  function UpdateLogicGates(){
    p.background(bg[0], bg[1], bg[2], bg[3]);
    lever.Update(100,100);
    notGate.Update(175,130);
    bulb.Update(400,90);
    andGate.Update(100,200,lever,lever)
  }
}