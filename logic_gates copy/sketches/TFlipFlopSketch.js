import Bulb from "../componets/Bulb.js";
import Button from "../componets/Button.js";
import NorGate from "../componets/NorGate.js";
import AndGate from "../componets/AndGate.js";
import NotGate from "../componets/NotGate.js";
import Lever from "../componets/Lever.js";

export const TFlipFlopSketch = (p) => {
  
  let bg = [150, 150, 200, 255];
  let button1 = new Button(p);
  let norGate1 = new NorGate(p);
  let norGate2 = new NorGate(p);
  let andGate1 = new AndGate(p);
  let andGate2 = new AndGate(p);
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  let mSNotGate1 = new NotGate(p);
  let mSNotGate2 = new NotGate(p);
  let mSNorGate1 = new NorGate(p);
  let lever = new Lever(p);

  p.setup = () => {
    const parent = document.getElementById("tFlipFlopDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("tFlipFlopDiv");
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

    button1.Update(10,100,isMousePressed);

    // lever.Update(50,210,isMouseClicked);

    mSNotGate1.Update(50,185,button1);
    mSNorGate1.Update(150,110,mSNotGate2,mSNotGate1);
    mSNotGate2.Update(100,155,mSNotGate1);

    let norX = 270;
    let andX = 270;

    norGate1.Update(norX,80,andGate1,norGate2);
    norGate2.Update(norX,150,norGate1,andGate2);
    andGate1.Update(andX,5,mSNorGate1,norGate1);
    andGate2.Update(andX,225,norGate2,mSNorGate1);

    bulb1.Update(450,75,norGate1);
    bulb2.Update(450,145,norGate2);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(20);
    p.text('T Flip Flop', 5, 20);
  }
}