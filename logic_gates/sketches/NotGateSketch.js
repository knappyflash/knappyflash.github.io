import Bulb from "../Componets/Bulb.js";
import Lever from "../Componets/Lever.js";
import NotGate from "../Componets/NotGate.js";

export const NotGateSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let lever1 = new Lever(p);
  let bulb1 = new Bulb(p);
  let notGate1 = new NotGate(p);

  let isMousePressed = false;
  let isMouseClicked = false;


  p.setup = () => {
    const parent = document.getElementById("notGateDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("notGateDiv");
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
    lever1.Update(60,200,isMouseClicked);
    notGate1.Update(175,250,lever1);
    bulb1.Update(400,185,notGate1);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('Not Gate', 125, 100);
  }
}