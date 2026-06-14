import Bulb from "../Componets/Bulb.js";
import Lever from "../Componets/Lever.js";
import OrGate from "../Componets/OrGate.js";
import NorGate from "../Componets/NorGate.js";

export const OrGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let lever2 = new Lever(p);
  let orGate1 = new OrGate(p);
  let bulb1 = new Bulb(p);

  let lever3 = new Lever(p);
  let lever4 = new Lever(p);
  let norGate1 = new NorGate(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;
  let isMouseClicked = false;


  p.setup = () => {
    const parent = document.getElementById("orGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("orGateDiv");
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
    lever1.Update(60,75,isMouseClicked);
    lever2.Update(60,105,isMouseClicked);
    orGate1.Update(175,80,lever1,lever2);
    bulb1.Update(400,75,orGate1);

    lever3.Update(60,190,isMouseClicked);
    lever4.Update(60,220,isMouseClicked);
    norGate1.Update(175,195,lever3,lever4);
    bulb2.Update(400,190,norGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Or / Nor Gate', 90, 50);
  }
}