import Bulb from "./Bulb.js";
import Lever from "./Lever.js";
import Button from "./Button.js";
import NorGate from "./NorGate.js";
import AndGate from "./AndGate.js";
import NotGate from "./NotGate.js";
// 1
export const DFlipFlopSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let button1 = new Button(p);
  let lever1 = new Lever(p);
  let norGate1 = new NorGate(p);
  let norGate2 = new NorGate(p);
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);
  let andGate1 = new AndGate(p);
  let andGate2 = new AndGate(p);
  let notGate1 = new NotGate(p);

  let isMousePressed = false;

  p.setup = () => {
    const parent = document.getElementById("dFlipFLopSketchDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("dFlipFLopSketchDiv");
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

    
    lever1.Update(30,250,isMousePressed);
    button1.Update(50,280,isMousePressed);

    notGate1.Update(30,145,lever1)
    
    andGate1.Update(100,100,notGate1,button1);
    andGate2.Update(100,200,lever1,button1);
    
    norGate2.Update(200,200,norGate1,andGate2);
    norGate1.Update(200,100,andGate1,norGate2);
    norGate2.Update(200,200,norGate1,andGate2);
    norGate1.Update(200,100,andGate1,norGate2);
    
    bulb1.Update(450,90,norGate1);
    bulb2.Update(450,190,norGate2);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('D Flip Flop', 110, 50);
  }
}