import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";
import AndGate  from "./AndGate.js";
import OrGate from "./OrGate.js";
import XOrGate from "./XOrGate.js";

export const ComponetsSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever = new Lever(p);
  let lever2 = new Lever(p);
  let bulb = new Bulb(p);
  let notGate = new NotGate(p);
  let andGate = new AndGate(p);
  let orGate = new OrGate(p);
  let xOrGate = new XOrGate(p);


  p.setup = () => {
    const parent = document.getElementById("componetsDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("componetsDiv");
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
    lever.Update(40,40);
    bulb.Update(100,30);
    notGate.Update(170,70);
    orGate.Update(265,10);
    andGate.Update(390,10);
    xOrGate.Update(20,150);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(15);
    p.text('Lever', 20, 100);
    p.text('Bulb', 85, 100);
    p.text('Not Gate', 155, 100);
    p.text('Or Gate', 270, 100);
    p.text('And Gate', 380, 100);
    p.text('Xor Gate', 20, 240);
  }
}