import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import NorGate from "../componets/NorGate.js";
import OrGate from "../componets/OrGate.js";
import AndGate from "../componets/AndGate.js";
import XOrGate from "../componets/XOrGate.js";

export const BinaryAdderSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let lever3 = new Lever(p);

  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);

  let xOrGate1 = new XOrGate(p);
  let xOrGate2 = new XOrGate(p);

  let andGate1 = new AndGate(p);
  let andGate2 = new AndGate(p);

  let orGate1 = new OrGate(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("binaryAdderDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("binaryAdderDiv");
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

    
    lever1.Update(30,95,isMouseClicked);
    lever2.Update(30,125,isMouseClicked);
    lever3.Update(30,200,isMouseClicked);

    xOrGate1.Update(90,100,lever1,lever2);
    andGate1.Update(90,200,lever1,lever2);
    
    xOrGate2.Update(200,100,xOrGate1,lever3);
    andGate2.Update(200,200,xOrGate1,lever3);
    
    orGate1.Update(318,200,andGate2,andGate1);
    
    bulb1.Update(450,90,xOrGate2);
    bulb2.Update(450,192,orGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Full Adder', 110, 50);
  }
}