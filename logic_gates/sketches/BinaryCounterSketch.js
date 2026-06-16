import Bulb from "../componets/Bulb.js";
import Lever from "../componets/Lever.js";
import TFlipFlop from "../componets/TFlipFlop.js";
import NotGate from "../componets/NotGate.js";
import Clock from "../componets/Clock.js";

export const BinaryCounter = (p) => {
  
  let bg = [150, 150, 200, 255];
  let bulb1 = new Bulb(p);
  let bulb2 = new Bulb(p);
  let bulb3 = new Bulb(p);
  let bulb4 = new Bulb(p);
  let lever = new Lever(p);
  let tFlipFlop1 = new TFlipFlop(p);
  let tFlipFlop2 = new TFlipFlop(p);
  let tFlipFlop3 = new TFlipFlop(p);
  let tFlipFlop4 = new TFlipFlop(p);
  let notGate1 = new NotGate(p);
  let notGate2 = new NotGate(p);
  let notGate3 = new NotGate(p);
  let notGate4 = new NotGate(p);
  let clock1 = new Clock(p);

  let isMousePressed = false;
  let isMouseClicked = false;

  p.setup = () => {
    const parent = document.getElementById("binaryCounterDiv");
    let w = parent.clientWidth;
    let h = parent.clientHeight;
    let canvas = p.createCanvas(w-20, h-20);
    canvas.parent("binaryCounterDiv");
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

    lever.Update(30,100,isMouseClicked);

    clock1.Update(30,200,lever,200);

    tFlipFlop1.Update(100,200,clock1);
    tFlipFlop2.Update(200,200,tFlipFlop1);
    tFlipFlop3.Update(300,200,tFlipFlop2);
    tFlipFlop4.Update(400,200,tFlipFlop3);

    notGate1.Update(100,150,tFlipFlop1);
    notGate2.Update(200,150,tFlipFlop2);
    notGate3.Update(300,150,tFlipFlop3);
    notGate4.Update(400,150,tFlipFlop4);

    bulb1.Update(120,50,notGate1);
    bulb2.Update(220,50,notGate2);
    bulb3.Update(320,50,notGate3);
    bulb4.Update(420,50,notGate4);

    p.fill(255, 255, 255);
    p.strokeWeight(3);
    p.stroke(0, 0, 0);
    p.textSize(20);
    p.text('Binary Counter', 5, 20);
  }
}