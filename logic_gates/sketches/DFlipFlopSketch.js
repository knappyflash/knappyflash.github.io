import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import Button from "../componets/Button.js";
import NorGate from "../componets/NorGate.js";
import AndGate from "../componets/AndGate.js";
import NotGate from "../componets/NotGate.js";

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
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("dFlipFLopSketchDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("dFlipFLopSketchDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    p.frameRate(30);
  }

  p.draw = () => {
    UpdateLogic();
    isMouseClicked = false;
  }

  p.mousePressed = () => {
    isMousePressed = true;
    isMouseClicked = true;
  }

  p.mouseReleased = () => {
    isMousePressed = false;
  }

  function UpdateLogic(){
    p.background(bg[0], bg[1], bg[2], bg[3]);

    
    lever1.Update(30,250,isMouseClicked);
    button1.Update(50,280,isMouseClicked);

    notGate1.Update(30,145,lever1)
    
    andGate1.Update(100,100,notGate1,button1);
    andGate2.Update(100,200,lever1,button1);
    
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