import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";

export const NotGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let leverA = new Lever(p);
  let leverB = new Lever(p);
  let bulb1 = new Bulb(p);
  let notGate1 = new NotGate(p);


  p.setup = () => {
    const parent = document.getElementById("notGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("notGateDiv");
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
    leverA.Update(60,90);
    notGate1.Update(175,130,leverA);
    bulb1.Update(400,90,notGate1);
  }
}