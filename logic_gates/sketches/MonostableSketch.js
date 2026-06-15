import Bulb from "../componets/Bulb.js";
// import Clock from "../componets/Clock.js";
import NotGate from "../componets/NotGate.js";
import Lever from "../componets/Lever.js";
import NorGate from "../componets/NorGate.js";
import OrGate from "../componets/OrGate.js";
import NandGate from "../componets/NandGate.js";
import AndGate from "../componets/AndGate.js";

export const MonostableSketch = (p) => {
  
  let bg = [150, 150, 200, 255];
  let isMousePressed = false;
  let isMouseClicked = false;
  let bulb = new Bulb(p);
  let notGate1 = new NotGate(p);
  let notGate2 = new NotGate(p);
  let notGate3 = new NotGate(p);
  let notGate4 = new NotGate(p);
  let notGate5 = new NotGate(p);

  let norGate1 = new NorGate(p);
  let orGate1 = new OrGate(p);

  // let clock = new Clock(p);
  let lever = new Lever(p);

  let nandGate1 = new NandGate(p);
  let nandGate2 = new NandGate(p);

  let andGate1 = new AndGate(p);

  p.setup = () => {
    const parent = document.getElementById("monostableSketchDiv");
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    const canvas = p.createCanvas(w-20, h-20);
    canvas.parent("monostableSketchDiv");
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
      
      lever.Update(120,150,isMouseClicked);

      notGate1.Update(250,200,lever);
      norGate1.Update(330,110,notGate3,notGate1);
      notGate3.Update(250,150,notGate2);
      notGate2.Update(170,150,lever);

      bulb.Update(450,102,norGate1);

      p.fill(255, 255, 255);
      p.strokeWeight(3);
      p.stroke(0, 0, 0);
      p.textSize(50);
      p.text('Monostable', 115, 50);
  }
}