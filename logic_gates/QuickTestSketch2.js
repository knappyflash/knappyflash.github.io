import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import NorGate from "./NorGate.js";

export const QuickTestSketch2 = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let norGate1 = new NorGate(p);
  let norGate2 = new NorGate(p);
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;

  p.setup = () => {
    const parent = document.getElementById("quickTest2Div");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("quickTest2Div");
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

    lever1.Update(30,70,isMousePressed);
    lever2.Update(30,250,isMousePressed);
    
    norGate2.Update(200,200,norGate1,lever2);
    norGate1.Update(200,100,lever1,norGate2);
    norGate2.Update(200,200,norGate1,lever2);
    norGate1.Update(200,100,lever1,norGate2);
    
    bulb1.Update(450,90,norGate1);
    bulb2.Update(450,190,norGate2);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('RS Nor Latch', 125, 50);
  }
}