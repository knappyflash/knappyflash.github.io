import Bulb from "../Componets/Bulb.js";
import Lever from "../Componets/Lever.js";
import AndGate from "../Componets/AndGate.js";
import NandGate from "../Componets/NandGate.js";

export const AndGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let andGate1 = new AndGate(p);
  let bulb1 = new Bulb(p);

  let lever3 = new Lever(p);
  let lever4 = new Lever(p);
  let nandGate1 = new NandGate(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;


  p.setup = () => {
    const parent = document.getElementById("andGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("andGateDiv");
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

    lever1.Update(60,84,isMousePressed);
    lever2.Update(60,115,isMousePressed);
    andGate1.Update(175,90,lever1,lever2);
    bulb1.Update(450,80,andGate1);

    lever3.Update(60,195,isMousePressed);
    lever4.Update(60,225,isMousePressed);
    nandGate1.Update(175,200,lever3,lever4);
    bulb2.Update(450,193,nandGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('And / Nand Gate', 70, 50);
  }
}