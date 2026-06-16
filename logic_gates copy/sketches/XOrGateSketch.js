import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import XOrGate from "../componets/XOrGate.js";
import XNorGate from "../componets/XNorGate.js";

export const XOrGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let xOrGate1 = new XOrGate(p);
  let bulb1 = new Bulb(p);

  let lever3 = new Lever(p);
  let lever4 = new Lever(p);
  let xNorGate1 = new XNorGate(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("xOrGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("xOrGateDiv");
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

    lever1.Update(60,83,isMouseClicked);
    lever2.Update(60,113,isMouseClicked);
    xOrGate1.Update(175,88,lever1,lever2);
    bulb1.Update(400,80,xOrGate1);

    lever3.Update(60,190,isMouseClicked);
    lever4.Update(60,220,isMouseClicked);
    xNorGate1.Update(175,195,lever3,lever4);
    bulb2.Update(400,188,xNorGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Xor / Xnor Gate', 80, 50);
  }
}