import Bulb from "../Componets/Bulb.js";
import Lever from "../Componets/Lever.js";
import NotGate from "../Componets/NotGate.js";
import AndGate  from "../Componets/AndGate.js";
import OrGate from "../Componets/OrGate.js";
import XOrGate from "../Componets/XOrGate.js";
import NandGate from "../Componets/NandGate.js";
import NorGate from "../Componets/NorGate.js";
import XNorGate from "../Componets/XNorGate.js";

export const ComponetsSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever = new Lever(p);
  let lever2 = new Lever(p);
  let bulb = new Bulb(p);
  let notGate = new NotGate(p);
  let andGate = new AndGate(p);
  let orGate = new OrGate(p);
  let xOrGate = new XOrGate(p);
  let nandGate = new NandGate(p);
  let norGate = new NorGate(p);
  let xnOrGate = new XNorGate(p);

  let isMousePressed = false;
  let isMouseClicked = false;


  p.setup = () => {
    const parent = document.getElementById("componetsDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("componetsDiv");
    p.background(bg[0], bg[1], bg[2], bg[3]);
    p.frameRate(30);
  }

  p.draw = () => {
    UpdateLogic();
    isMouseClicked =false;
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
    lever.Update(40,40,isMouseClicked);
    bulb.Update(100,30);
    notGate.Update(170,70);
    orGate.Update(265,10);
    andGate.Update(390,10);
    xOrGate.Update(20,150);
    nandGate.Update(150,150);
    norGate.Update(265,150);
    xnOrGate.Update(390,150);

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
    p.text('Nand Gate', 155, 240);
    p.text('Nor Gate', 270, 240);
    p.text('Xnor Gate', 380, 240);
  }
}