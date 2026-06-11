import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import OrGate from "./OrGate.js";
import NorGate from "./NorGate.js";

export const OrGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let orGate1 = new OrGate(p);
  let bulb1 = new Bulb(p);

  let lever3 = new Lever(p);
  let lever4 = new Lever(p);
  let norGate1 = new NorGate(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;


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
    isMousePressed = true;
    UpdateLogicGates();
  }

  p.mouseReleased = () => {
    isMousePressed = false;
    UpdateLogicGates();
  }

  function UpdateLogicGates(){
    p.background(bg[0], bg[1], bg[2], bg[3]);
    lever1.Update(60,75,isMousePressed);
    lever2.Update(60,105,isMousePressed);
    orGate1.Update(175,80,lever1,lever2);
    bulb1.Update(400,75,orGate1);

    lever3.Update(60,190,isMousePressed);
    lever4.Update(60,220,isMousePressed);
    norGate1.Update(175,195,lever3,lever4);
    bulb2.Update(400,190,norGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Or / Nor Gate', 90, 50);
  }
}