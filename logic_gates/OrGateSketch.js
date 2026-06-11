import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import OrGate from "./OrGate.js";

export const OrGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let orGate1 = new OrGate(p);
  let bulb1 = new Bulb(p);


  p.setup = () => {
    const parent = document.getElementById("orGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("orGateDiv");
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
    lever1.Update(60,180);
    lever2.Update(60,240);
    orGate1.Update(175,195,lever1,lever2);
    bulb1.Update(400,185,orGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Or Gate', 125, 100);
  }
}