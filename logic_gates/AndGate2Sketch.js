import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NotGate from "./NotGate.js";
import OrGate from "./OrGate.js";

export const AndGate2Sketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let notGate1 = new NotGate(p);
  let notGate2 = new NotGate(p);
  let notGate3 = new NotGate(p);
  let orGate1 = new OrGate(p);
  let bulb1 = new Bulb(p);

  let isMousePressed = false;

  p.setup = () => {
    const parent = document.getElementById("andGate2Div");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("andGate2Div");
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
    lever1.Update(30,70,isMousePressed);
    lever2.Update(30,200,isMousePressed);
    notGate1.Update(100,120,lever1);
    notGate2.Update(100,250,lever2);
    orGate1.Update(200,125,notGate1,notGate2);
    notGate3.Update(320,183,orGate1);
    bulb1.Update(450,117,notGate3);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('And Gate 2', 125, 50);
  }
}