import Bulb from "../Componets/Bulb.js";
import Button from "../Componets/Button.js";
import NorGate from "../Componets/NorGate.js";

export const RsNorLatchSketch = (p) => {
  let bg = [150, 150, 200, 255];

  let button1 = new Button(p);
  let button2 = new Button(p);
  let norGate1 = new NorGate(p);
  let norGate2 = new NorGate(p);
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("rsNorLatchDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("rsNorLatchDiv");
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

    button1.Update(30,115,isMouseClicked);
    button2.Update(30,245,isMouseClicked);
    
    norGate2.Update(200,200,norGate1,button2);
    norGate1.Update(200,100,button1,norGate2);
    
    bulb1.Update(450,90,norGate1);
    bulb2.Update(450,190,norGate2);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(50);
    p.text('RS Nor Latch', 90, 50);
  }
}