import Bulb from "./Bulb.js";
import Button from "./Button.js";
import NorGate from "./NOrGate.js";

export const RsNorLatchSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let button1 = new Button(p);
  let button2 = new Button(p);
  let norGate1 = new NorGate(p);
  let norGate2 = new NorGate(p);
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;

  p.setup = () => {
    const parent = document.getElementById("rsNorLatchDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("rsNorLatchDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    UpdateLogicGates();
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

    button1.Update(30,115,isMousePressed);
    button2.Update(30,245,isMousePressed);
    
    norGate2.Update(200,200,norGate1,button2);
    norGate1.Update(200,100,button1,norGate2);
    norGate2.Update(200,200,norGate1,button2);
    norGate1.Update(200,100,button1,norGate2);
    
    bulb1.Update(450,90,norGate1);
    bulb2.Update(450,190,norGate2);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('RS Nor Latch', 125, 50);
  }
}